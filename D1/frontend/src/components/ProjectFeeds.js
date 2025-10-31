// 6-u21769584

import React from "react";
import ReactDOM from "react-dom/client";

import { useState } from "react";

import PropTypes from 'prop-types'

import {Feed} from "./Feed";

import { mockProjects } from "./Projects";


const activityFeed = [
  {
    id: 1,
    userName: "Lerato",
    profilePic: "https://example.com/user1.jpg", // replace with actual
    projectImage: "https://example.com/project1.jpg", // replace with actual
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
    profilePic: "https://example.com/user2.jpg",
    projectImage: "https://example.com/project2.jpg",
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
    profilePic: "https://example.com/user3.jpg",
    projectImage: "https://example.com/project3.jpg",
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
    profilePic: "https://example.com/user4.jpg",
    projectImage: "https://example.com/project4.jpg",
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
    profilePic: "https://example.com/user5.jpg",
    projectImage: "https://example.com/project5.jpg",
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
    profilePic: "https://example.com/user6.jpg",
    projectImage: "https://example.com/project6.jpg",
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
    profilePic: "https://example.com/user7.jpg",
    projectImage: "https://example.com/project7.jpg",
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
    profilePic: "https://example.com/user8.jpg",
    projectImage: "https://example.com/project8.jpg",
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
    profilePic: "https://example.com/user9.jpg",
    projectImage: "https://example.com/project9.jpg",
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
    profilePic: "https://example.com/user10.jpg",
    projectImage: "https://example.com/project10.jpg",
    description: "Migrated project to latest React version", 
    activities: [{modifiedBy: "Njabulos", comment: "Lerato the goat"}, 
        {modifiedBy: "Njabulo", comment: "KatLego the goat"}, 
        {modifiedBy: "Njabulo", comment: "Lerato the goat"}
    ], 
    scope: "global",
    projectId: 1
  }

  
];


const ProjectFeeds = ({activities}) => {
    if (!activities || activities.length === 0) {
      return <p>No recent activity</p>;
    }

    // console.log(activities)

  return (
    <>
        <link rel="stylesheet" type="text/css" href="/assets/css/ProjectFeeds.css"/>
        <h2 className="ProjectFeedsH2">Activity Feed</h2>

        <ul className="ProjectFeeds">
            {activities.map((activity, activityIndex) => {
                return <li key={activityIndex}><h3>{activity.type}</h3>  <h4>{activity.modifiedBy}</h4> <p>"{activity.comment}"</p> </li>
            })}
        </ul>
    </>
  )
}


export { ProjectFeeds, activityFeed }