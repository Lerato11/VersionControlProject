// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";
import {ProfilePreview} from "./ProfilePreview";
import { EmptyState } from "./EmptyState";


import { useState, useRef, useEffect } from "react";

import { mockMembers } from "./Members";

const Friends = ({userId}) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // console.log("User Id"+ userId);

    useEffect(() => {
        const fetchFriends = async () => {
        try {
            setLoading(true);
            setError("");

            const res = await fetch(`/api/users/friends?userId=${userId}`);
            const data = await res.json();


            if (!res.ok || !data.success) {
                setError(data.message || "Error fetching friends");
                setFriends([]);

            } else {
                setFriends(data.friends);
            }
        } catch (err) {
            setError("Network error, try again");
        } finally {
            setLoading(false);
        }
        };

        const userIdNum = Number(userId);
        if (!userIdNum) {
            console.error("Invalid userId", userId);
            return;
        }


        if (userId) {
        fetchFriends();
        }
    }, [userId]);

    // console.log(friends)


    if (loading) return <p>Loading friends...</p>;
    if (error) return <p>{error}</p>;
    // if (!friends.length) return <p>No friends found.</p>;

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Friends.css"/>

            <h2 className="secondaryHeader">Friends</h2>

            <div className="friends-empty-state">
            {friends.length === 0 ? (
                <EmptyState
                    title="No Friends Yet"
                    message="You haven't added any friends. Try searching for people to connect with!"
                    // image="/assets/images/empty-friends.svg"
                />
                ) : (
                <ul className="FriendsUl">
                    {friends.map((friend) => (
                    <ProfilePreview
                        key={friend.id}
                        profileImg={friend.image}
                        name={friend.username}
                        email={friend.email}
                        userId={friend.id}
                    />
                    ))}
                </ul>
            )}
            </div>
        </>
    )
}

export {Friends}