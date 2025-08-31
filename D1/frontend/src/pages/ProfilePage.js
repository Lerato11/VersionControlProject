import React from "react";
import ReactDOM from "react-dom";

import {Projects} from "../components/Projects";
import {Feeds} from "../components/Feeds"
import {Profile} from "../components/Profile"
import { FeedDescr } from "../components/FeedDescr";
import { Friends } from "../components/Friends";

import { activityFeed } from "../components/Feeds";

// import "../../../public/assets/css/"

const ProfilePage = () => {
    return (
       <>
        <link rel="stylesheet" type="text/css" href="/assets/css/ProfilePage.css"/>
        <div className="ProfilePage">
            <div className="ProfileDiv">
                <Profile />
            </div>
            
            <div className="ProjectsDiv">
                <Projects userId={2}/>
            </div>
            
            <div className="FeedsDiv">
                <h1>Activity Feed</h1>
                <Feeds scope={"local"}/>
            </div>

        </div>

        <div>
            <h3>Friends</h3>
            <Friends id={8}/>
        </div>
        </>
    )
}

export {ProfilePage}