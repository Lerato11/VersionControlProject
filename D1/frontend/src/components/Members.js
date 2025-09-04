// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";

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
    let membersToDisplay = mockMembers;

    
    if (projectId) {
        membersToDisplay = mockMembers.filter(member => 
            member.projects.includes(projectId)
        );
    }
    
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Friends.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/Projects.css"/>

            <div className="ProjectsHeaders">
              <h2 className="ProjectH2-2">Members</h2>
              <button>+ Member</button>
            </div>
         
            <ul className="FriendsUl">
                {membersToDisplay.map((member) => {
                    return <ProfilePreview key={member.id} profileImg={member.profileImage} name={member.name} email={member.email}/>
                })}
            </ul>
        </>
    )
}


export { Members, mockMembers }
