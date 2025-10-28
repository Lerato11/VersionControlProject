// 6-u21769584

import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import {Projects} from "../components/Projects";
import {Feeds} from "../components/Feeds"
import {Profile} from "../components/Profile"
import { FeedDescr } from "../components/FeedDescr";
import { Friends } from "../components/Friends";
import { Nav } from "../components/Nav";

import { activityFeed } from "../components/Feeds";

// import "../../../public/assets/css/"

const ProfilePage = () => {
    const { id } = useParams(); 

    
    const loggedInUserId = parseInt(localStorage.getItem("userId"));
    const userIdToShow = id ? parseInt(id) : loggedInUserId;

    console.log("Profileid: " + userIdToShow)
    return (
       <>
        <link rel="stylesheet" type="text/css" href="/assets/css/ProfilePage.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/css/Home.css"/>
            <Nav />

        <div className="ProfilePage">
            <div className="ProfileDiv">
                <Profile userId={userIdToShow}/>
            </div>
            
            <div className="HomeProjectsDiv">
                <Projects userId={userIdToShow}/>  
                <Friends userId={userIdToShow}/>

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