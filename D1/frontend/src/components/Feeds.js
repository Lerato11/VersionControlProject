
import React from "react";
import ReactDOM from "react-dom/client";

import { useState } from "react";

import PropTypes from 'prop-types';

import {Feed} from "./Feed";

const activityFeed = [
  {
    id: 1,
    userName: "Lerato",
    profilePic: "https://example.com/user1.jpg", // replace with actual
    projectImage: "https://example.com/project1.jpg", // replace with actual
    description: "Refactored authentication flow and fixed login redirect bug"
  },
  {
    id: 2,
    userName: "Maya",
    profilePic: "https://example.com/user2.jpg",
    projectImage: "https://example.com/project2.jpg",
    description: "Added dark mode toggle and updated theme provider"
  },
  {
    id: 3,
    userName: "Ethan",
    profilePic: "https://example.com/user3.jpg",
    projectImage: "https://example.com/project3.jpg",
    description: "Improved API error handling and added retry logic"
  },
  {
    id: 4,
    userName: "Aisha",
    profilePic: "https://example.com/user4.jpg",
    projectImage: "https://example.com/project4.jpg",
    description: "Updated dashboard UI and optimized chart rendering"
  },
  {
    id: 5,
    userName: "Kai",
    profilePic: "https://example.com/user5.jpg",
    projectImage: "https://example.com/project5.jpg",
    description: "Created reusable button component and cleaned CSS"
  },
  {
    id: 6,
    userName: "Noah",
    profilePic: "https://example.com/user6.jpg",
    projectImage: "https://example.com/project6.jpg",
    description: "Implemented unit tests for user service"
  },
  {
    id: 7,
    userName: "Amara",
    profilePic: "https://example.com/user7.jpg",
    projectImage: "https://example.com/project7.jpg",
    description: "Fixed merge conflicts and updated README"
  },
  {
    id: 8,
    userName: "Zane",
    profilePic: "https://example.com/user8.jpg",
    projectImage: "https://example.com/project8.jpg",
    description: "Improved performance of search feature"
  },
  {
    id: 9,
    userName: "Sofia",
    profilePic: "https://example.com/user9.jpg",
    projectImage: "https://example.com/project9.jpg",
    description: "Added localization support for French and Spanish"
  },
  {
    id: 10,
    userName: "Leo",
    profilePic: "https://example.com/user10.jpg",
    projectImage: "https://example.com/project10.jpg",
    description: "Migrated project to latest React version"
  }
];


const Feeds = () => {
  return (
    <>
      <h2>Activity Feed</h2>

      <div>
        <button>local</button>
        <button>global</button>
      </div>
      

      <ul>
        {activityFeed.map((feed, feedIndex) => {
          return <Feed key= {feedIndex} projectImg= {feed.projectImage} profileImg={feed.profilePic} projectDscr={feed.description} username={feed.userName}/>
        })}
      </ul>
    </>
  )
}


export { Feeds }