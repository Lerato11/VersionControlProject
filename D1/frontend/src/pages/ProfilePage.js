// 6-u21769584

import React from "react";
import ReactDOM from "react-dom";
import { useState, useRef, useEffect } from "react";

import { useParams } from "react-router-dom";
import {Projects} from "../components/Projects";
import {Feeds} from "../components/Feeds"
import {Profile} from "../components/Profile"
import { FeedDescr } from "../components/FeedDescr";
import { Friends } from "../components/Friends";
import { Nav } from "../components/Nav";

import { EmptyState } from "../components/EmptyState";


import { activityFeed } from "../components/Feeds";

// import "../../../public/assets/css/"

const ProfilePage = () => {
    const { id } = useParams(); 

    
    const loggedInUserId = parseInt(localStorage.getItem("userId"));
    const userIdToShow = id ? parseInt(id) : loggedInUserId;

    const [isTargetFriend, setIsTargetFriend] = useState(false);
    const [isTargetOwnProfile, setIsTargetOwnProfile] = useState(false);

    const handleFriendStatusChange = (isFriendStatus, isOwnStatus) => {
        setIsTargetFriend(isFriendStatus);
        setIsTargetOwnProfile(isOwnStatus);
    };

    // console.log("Profileid: " + userIdToShow)
    return (
       <>
        <link rel="stylesheet" type="text/css" href="/assets/css/ProfilePage.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/css/Home.css"/>
            <Nav />

        <div className="ProfilePage">
            <div className="ProfileDiv">
                <Profile userId={userIdToShow} onFriendStatusChange={handleFriendStatusChange}/>
            </div>
            
            <div className="HomeProjectsDiv">
                <Projects userId={userIdToShow}/>  
                {(isTargetFriend || isTargetOwnProfile) ? (
                    <Friends userId={userIdToShow}/>
                ) : (
                    <>
                        <h2 className="secondaryHeader">Friends</h2>
                    <EmptyState
                        title={`Become friends with them to see their friends list.`} />
                    </>
                    
                )}

            </div>
            
            <div className="FeedsDiv">
                <h2>Activity Feed</h2>

                <Feeds scope={"local"}/>
            </div>


        </div>

        
        </>
    )
}

export {ProfilePage}