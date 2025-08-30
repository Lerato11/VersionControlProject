import React from "react";

import ReactDOM from "react-dom/client";

import {Member} from "./Member";


const mockMembers = [
  {
    id: 1,
    name: "Lerato Matsile",
    profileImage: "https://example.com/user1.jpg",
    email: "lerato.matsile@example.com"
  },
  {
    id: 2,
    name: "Maya Patel",
    profileImage: "https://example.com/user2.jpg",
    email: "maya.patel@example.com"
  },
  {
    id: 3,
    name: "Ethan Walker",
    profileImage: "https://example.com/user3.jpg",
    email: "ethan.walker@example.com"
  },
  {
    id: 4,
    name: "Aisha Khan",
    profileImage: "https://example.com/user4.jpg",
    email: "aisha.khan@example.com"
  },
  {
    id: 5,
    name: "Kai Chen",
    profileImage: "https://example.com/user5.jpg",
    email: "kai.chen@example.com"
  },
  {
    id: 6,
    name: "Noah Smith",
    profileImage: "https://example.com/user6.jpg",
    email: "noah.smith@example.com"
  },
  {
    id: 7,
    name: "Amara Johnson",
    profileImage: "https://example.com/user7.jpg",
    email: "amara.johnson@example.com"
  },
  {
    id: 8,
    name: "Zane Roberts",
    profileImage: "https://example.com/user8.jpg",
    email: "zane.roberts@example.com"
  },
  {
    id: 9,
    name: "Sofia Lopez",
    profileImage: "https://example.com/user9.jpg",
    email: "sofia.lopez@example.com"
  },
  {
    id: 10,
    name: "Leo Williams",
    profileImage: "https://example.com/user10.jpg",
    email: "leo.williams@example.com"
  }
];

const Members = () => {
    return (
        <>
            <h2>Members</h2>
            <button>+ Member</button>
         
          <ul>
            {mockMembers.map((member, memberIndex) => {
                return <Member key= {memberIndex} profileImg={member.profilePic} name={member.name} email={member.email}/>
            })}
        </ul>
        </>
    )
}


export { Members }
