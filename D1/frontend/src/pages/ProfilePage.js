// 6-u21769584

import React from "react";
import ReactDOM from "react-dom";

import {Projects} from "../components/Projects";
import {Feeds} from "../components/Feeds"
import {Profile} from "../components/Profile"
import { FeedDescr } from "../components/FeedDescr";
import { Friends } from "../components/Friends";
import { Nav } from "../components/Nav";

import { activityFeed } from "../components/Feeds";

// import "../../../public/assets/css/"

const ProfilePage = () => {
    return (
       <>
        <link rel="stylesheet" type="text/css" href="/assets/css/ProfilePage.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/css/Home.css"/>
            <Nav />

        <div className="ProfilePage">
            <div className="ProfileDiv">
                <Profile />
            </div>
            
            <div className="HomeProjectsDiv">
                <Projects userId={2}/>
            </div>
            
            <div className="FeedsDiv">
                <h2>Activity Feed</h2>

                <Feeds scope={"local"}/>
            </div>

            <div className="FriendsDiv">
                {/* <h3>Friends</h3> */}
                <Friends id={8}/>
            </div>

        </div>

        
        </>
    )
}

export {ProfilePage}