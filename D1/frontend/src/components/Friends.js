// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";
import {ProfilePreview} from "./ProfilePreview";


import { mockMembers } from "./Members";

const Friends = ({id}) => {
    const targetMember = mockMembers.find(member => member.id === id);

    const friendsList = mockMembers.filter(member =>
        targetMember.friends.includes(member.id)
    );

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Friends.css"/>

            <h2>Friends</h2>

          <ul className="FriendsUl">
            {friendsList.map((friend) => (
                    <ProfilePreview
                        key={friend.id}
                        profileImg={friend.profileImage}
                        name={friend.name}
                        email={friend.email}
                    />
                ))}
        </ul>
        </>
    )
}

export {Friends}