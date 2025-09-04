// 6-u21769584

import React from "react";
import ReactDOM from "react-dom/client";

import {PropTypes} from 'prop-types';


const FeedDescr = ({activity, profileImg, projectDscr, username}) => {
    return (
        <div className="FeedDescr">
            <link rel="stylesheet" type="text/css" href="/assets/css/FeedDescr.css"/>
            <div className="profileFeedpicDiv">
                <img src={`${profileImg}`} className="profileFeedPicture"></img> {/* profile image */}
            </div>
            <div>
                <h4>{username}</h4>
                <p>{`${projectDscr}`}</p>
            </div>
        </div>
    )
}


export { FeedDescr };