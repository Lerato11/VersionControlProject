// 6-u21769584

import React from "react";
import ReactDOM from "react-dom/client";

import { useState } from "react";

import PropTypes from 'prop-types'

import {Feed} from "./Feed";



const activityFeed = [
  {
    id: 1,
    userName: "Lerato",
    profilePic: "/assets/images/member9.webp", // replace with actual
    profileImage: "/assets/images/news-projetcs.jpg", // replace with actual
    description: "Refactored authentication flow and fixed login redirect bug", 
    activities: [{modifiedBy: "Njabulo", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "local", 
    projectId: 5
  },
  {
    id: 2,
    userName: "Maya",
    profilePic: "/assets/images/member8.jpg",
    profileImage: "/assets/images/data-projects.webp",
    description: "Added dark mode toggle and updated theme provider", 
    activities: [{modifiedBy: "Njabulo", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "global",
    projectId: 2
  },
  {
    id: 3,
    userName: "Ethan",
    profilePic: "/assets/images/member3.png",
    profileImage: "/assets/images/tasks-projects.jpg",
    description: "Improved API error handling and added retry logic", 
    activities: [{modifiedBy: "Njabulo", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "local",
    projectId: 4
  },
  {
    id: 4,
    userName: "Aisha",
    profilePic: "/assets/images/member1.jpg",
    profileImage: "/assets/images/travel-projects.jpg",
    description: "Updated dashboard UI and optimized chart rendering", 
    activities: [{modifiedBy: "Njabulo", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "local",
    projectId: 4
  },
  {
    id: 5,
    userName: "Kai",
    profilePic: "/assets/images/member4.jpg",
    profileImage: "/assets/images/fintrack-projects.jpg",
    description: "Created reusable button component and cleaned CSS", 
    activities: [{modifiedBy: "Njabulo", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "global",
    projectId: 4
  },
  {
    id: 6,
    userName: "Noah",
    profilePic: "/assets/images/member5.jpeg",
    profileImage: "/assets/images/medical-project.jpg",
    description: "Implemented unit tests for user service", 
    activities: [{modifiedBy: "Njabulo", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "local",
    projectId: 6
  },
  {
    id: 7,
    userName: "Amara",
    profilePic: "/assets/images/member2.jpg",
    profileImage: "/assets/images/ecommerce-projects.jpg",
    description: "Fixed merge conflicts and updated README", 
    activities: [{modifiedBy: "Njabulo", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "global",
    projectId: 4
  },
  {
    id: 8,
    userName: "Zane",
    profilePic: "/assets/images/member10.webp",
    profileImage: "/assets/images/news-projetcs.jpg",
    description: "Improved performance of search feature", 
    activities: [{modifiedBy: "Njabulo", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "global",
    projectId: 4
  },
  {
    id: 9,
    userName: "Sofia",
    profilePic: "/assets/images/member6.webp",
    profileImage: "/assets/images/auth0-project.png",
    description: "Added localization support for French and Spanish", 
    activities: [{modifiedBy: "Njabulo", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "local", 
    projectId: 3
  },
  {
    id: 10,
    userName: "Leo",
    profilePic: "/assets/images/member7.jpg",
    profileImage: "/assets/images/stocks-projects.jpg",
    description: "Migrated project to latest React version", 
    activities: [{modifiedBy: "Njabulos", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "global",
    projectId: 1
  }

  
];


const Feeds = ({scope}) => {
  var scopedFeed = activityFeed.filter((activityFeed) => {
        return activityFeed.scope == scope;
      });
  return (
    
    <>
      
      <link rel="stylesheet" type="text/css" href="/assets/css/Feeds.css"/>
      {/* <h2>Activity Feed</h2> */}
      <ul className="FeedsUl">
        {scopedFeed.map((feed, feedIndex) => {
          return <Feed key= {feedIndex} activity={feed.activities[0]} projectImg= {feed.profileImage} profileImg={feed.profilePic} projectDscr={feed.description} username={feed.userName}/>
        })}
      </ul>
    </>
  )
}


export { Feeds, activityFeed }