// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

import {ProfilePreview} from "./ProfilePreview";


const mockMembers = [
  {
    id: 1,
    name: "Lerato Matsile",
    profileImage: "/assets/images/member1.jpg",
    email: "lerato.matsile@example.com",
    projects: [1, 4, 6], 
    friends: [7, 6]
  },
  {
    id: 2,
    name: "Maya Patel",
    profileImage: "/assets/images/member2.jpg",
    email: "maya.patel@example.com",
    projects: [1, 3, 8, 2, 9], 
    friends: [4, 8, 6]
  },
  {
    id: 3,
    name: "Ethan Walker",
    profileImage: "/assets/images/member3.png",
    email: "ethan.walker@example.com",
    projects: [9, 3, 6], 
    friends: [7, 6]
  },
  {
    id: 4,
    name: "Aisha Khan",
    profileImage: "/assets/images/member4.jpg",
    email: "aisha.khan@example.com",
    projects: [1, 5, 8], 
    friends: [3, 6]
  },
  {
    id: 5,
    name: "Kai Chen",
    profileImage: "/assets/images/member5.jpeg",
    email: "kai.chen@example.com",
    projects: [2], 
    friends: [2, 3, 7, 6]
  },
  {
    id: 6,
    name: "Noah Smith",
    profileImage: "/assets/images/member6.webp",
    email: "noah.smith@example.com",
    projects: [2, 4, 5, 7], 
    friends: [7, 6]
  },
  {
    id: 7,
    name: "Amara Johnson",
    profileImage: "/assets/images/member7.jpg",
    email: "amara.johnson@example.com",
    projects: [1, 6], 
    friends: [7, 6]
  },
  {
    id: 8,
    name: "Zane Roberts",
    profileImage: "/assets/images/member8.jpg",
    email: "zane.roberts@example.com",
    projects: [2, 3, 6], 
    friends: [1, 7, 3]
  },
  {
    id: 9,
    name: "Sofia Lopez",
    profileImage: "/assets/images/member9.webp",
    email: "sofia.lopez@example.com",
    projects: [1, 2, 6], 
    friends: [7, 6]
  },
  {
    id: 10,
    name: "Leo Williams",
    profileImage: "/assets/images/member10.webp",
    email: "leo.williams@example.com",
    projects: [9, 4], 
    friends: [7, 6]
  }
];

const Members = ({ projectId }) => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [addMemberModalOpen, setAddMemberModalOpen] = useState(false);
    const [friendOptions, setFriendOptions] = useState([]);
    const [selectedFriends, setSelectedFriends] = useState([]);

    useEffect(() => {
      const fetchMembers = async () => {
        if (!projectId) return;

        try {
          setLoading(true);
          setError("");

        
          const res = await fetch(`/api/projects/${projectId}`);
          const data = await res.json();

          if (!res.ok || !data.success) {
            setError(data.message || "Error fetching members");
            setMembers([]);
          } else {
            const memberIds = data.project.members; 

            
            const memberRes = await Promise.all(
              memberIds.map(async (id) => {
                const res = await fetch(`/api/users/${id}`);
                const userData = await res.json();
                return userData.user; 
              })
            );

            setMembers(memberRes);
          }
        } catch (err) {
          console.log(err)
          setError("Network error, try again");
        } finally {
          setLoading(false);
        }
      };

      fetchMembers();
    }, [projectId]);

    if (loading) return <p>Loading members...</p>;
    if (error) return <p>{error}</p>;
    if (!members.length) return <p>No members found.</p>;

    const handleAddMemberClick = async () => {

      const loggedInUserId = parseInt(localStorage.getItem("userId"));
      const res = await fetch(`/api/users/${loggedInUserId}`);
      const data = await res.json();
      
      if (!res.ok || !data.success) return alert("Failed to fetch friends");


      const nonMembers = data.user.friends.filter(fId => !members.some(m => m.id === fId));


      const friendDetails = await Promise.all(nonMembers.map(async id => {
        const res = await fetch(`/api/users/${id}`);
        const friendData = await res.json();
        return friendData.user;
      }));

      setFriendOptions(friendDetails);
      setSelectedFriends([]);
      setAddMemberModalOpen(true);
    };


    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Friends.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/Projects.css"/>

            <div className="ProjectsHeaders">
              <h2 className="ProjectH2-2">Members</h2>
              <button onClick={handleAddMemberClick}>+ Member</button>

            </div>
         
            <ul className="FriendsUl">
                {members.map((member) => {
                    return <ProfilePreview key={member.id} profileImg={member.image} name={member.username} email={member.email} userId={member.id}/>
                })}
            </ul>




          {addMemberModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">

                <div className="modal-header">
                  <h2>Select friends to add</h2>

                  <button 
                    className="close-btn" 
                    onClick={() => setAddMemberModalOpen(false)}
                  >
                    &times;
                  </button>
                </div>

               
                <div className="add-project-form"> 
                  
              
                  <ul>
                    {friendOptions.map(friend => (
                      <li key={friend.id}>
                        <label>
                          <input 
                            type="checkbox" 
                            value={friend.id} 
                            checked={selectedFriends.includes(friend.id)}
                            onChange={e => {
                              const id = parseInt(e.target.value);
                              setSelectedFriends(prev => 
                                prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
                              );
                            }}
                          />
                          {friend.username} ({friend.email})
                        </label>
                      </li>
                    ))}
                  </ul>

                  <div className="modal-actions">
                    <button 
                      onClick={async () => {
                        // ... your existing logic for adding members ...
                        const loggedInUserId = parseInt(localStorage.getItem("userId"));

                        for (let fId of selectedFriends) {
                          await fetch(`/api/projects/addMember/${projectId}`, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              addedMemberId: fId,
                              addingMemberId: loggedInUserId
                            })
                          });
                        }

                        // Refresh members
                        setAddMemberModalOpen(false);
                        // Trigger re-fetch of members list
                        setMembers(prev => [...prev, ...friendOptions.filter(f => selectedFriends.includes(f.id))]);
                      }}
                    >
                      Add Selected
                    </button>

                  </div>
                </div>
              </div>
            </div>
          )}

        </>
    )
}


export { Members, mockMembers }
