// 6-u21769584

import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";


import {Projects} from "../components/Projects";
import {Feeds} from "../components/Feeds";
import {Nav} from "../components/Nav";

// import "../../../public/assets/css/"

let userId = localStorage.getItem("userId");


const Home = () => {
  const [scope, setScope] = useState("global");

  const toggleFeedScope = (scope) => {
            setScope(scope);
    }

    return (
       <>
        <link rel="stylesheet" type="text/css" href="/assets/css/Home.css"/>
        <Nav />
        
        <div className="HomeGrid">
            <div className="HomeProjectsDiv">
                <Projects userId={userId}/>
            </div>

            <div className="HomeFeedDiv">
                <h2>Activity Feed</h2>
                <div className="feedButtonDiv">
                    <button onClick={() => toggleFeedScope("global")}>global</button>
                    <button onClick={() => toggleFeedScope("local")}>local</button>
                </div>


                <Feeds scope={scope}/>
            </div>

        </div>
        </>
       
    )
}

export {Home}