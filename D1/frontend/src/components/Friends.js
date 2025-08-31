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
            <h2>Friends</h2>

          <ul>
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