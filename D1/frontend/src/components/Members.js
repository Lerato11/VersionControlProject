import React from "react";

import ReactDOM from "react-dom/client";

import {ProfilePreview} from "./ProfilePreview";


const mockMembers = [
  {
    id: 1,
    name: "Lerato Matsile",
    profileImage: "https://example.com/user1.jpg",
    email: "lerato.matsile@example.com",
    projects: [1, 4, 6], 
    friends: [7, 6]
  },
  {
    id: 2,
    name: "Maya Patel",
    profileImage: "https://example.com/user2.jpg",
    email: "maya.patel@example.com",
    projects: [1, 3, 8, 2, 9], 
    friends: [4, 8, 6]
  },
  {
    id: 3,
    name: "Ethan Walker",
    profileImage: "https://example.com/user3.jpg",
    email: "ethan.walker@example.com",
    projects: [9, 3, 6], 
    friends: [7, 6]
  },
  {
    id: 4,
    name: "Aisha Khan",
    profileImage: "https://example.com/user4.jpg",
    email: "aisha.khan@example.com",
    projects: [1, 5, 8], 
    friends: [3, 6]
  },
  {
    id: 5,
    name: "Kai Chen",
    profileImage: "https://example.com/user5.jpg",
    email: "kai.chen@example.com",
    projects: [2], 
    friends: [2, 3, 7, 6]
  },
  {
    id: 6,
    name: "Noah Smith",
    profileImage: "https://example.com/user6.jpg",
    email: "noah.smith@example.com",
    projects: [2, 4, 5, 7], 
    friends: [7, 6]
  },
  {
    id: 7,
    name: "Amara Johnson",
    profileImage: "https://example.com/user7.jpg",
    email: "amara.johnson@example.com",
    projects: [1, 6], 
    friends: [7, 6]
  },
  {
    id: 8,
    name: "Zane Roberts",
    profileImage: "https://example.com/user8.jpg",
    email: "zane.roberts@example.com",
    projects: [2, 3, 6], 
    friends: [1, 7, 3]
  },
  {
    id: 9,
    name: "Sofia Lopez",
    profileImage: "https://example.com/user9.jpg",
    email: "sofia.lopez@example.com",
    projects: [1, 2, 6], 
    friends: [7, 6]
  },
  {
    id: 10,
    name: "Leo Williams",
    profileImage: "https://example.com/user10.jpg",
    email: "leo.williams@example.com",
    projects: [9, 4], 
    friends: [7, 6]
  }
];

const Members = ({ projectId }) => {
    let membersToDisplay = mockMembers;

    
    if (projectId) {
        membersToDisplay = mockMembers.filter(member => 
            member.projects.includes(projectId)
        );
    }
    
    return (
        <>
            <h2>Members</h2>
            <button>+ Member</button>
         
          <ul>
            {membersToDisplay.map((member) => {
                return <ProfilePreview key={member.id} profileImg={member.profilePic} name={member.name} email={member.email}/>
            })}
        </ul>
        </>
    )
}


export { Members, mockMembers }
