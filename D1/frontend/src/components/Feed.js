// 6-u21769584

import React from "react";
import ReactDOM from "react-dom/client";

import {PropTypes} from 'prop-types';
import { Link } from "react-router-dom";


import {FeedDescr} from './FeedDescr'


const Feed = ({id, projectImg, profileImg, projectDscr, username}) => {
    return (
        <Link to={`/projects/${id}`} className="projectLink">
        
            <li className="FeedLi"> 
                <link rel="stylesheet" type="text/css" href="/assets/css/Feed.css"/>

                
                <img src={`${projectImg}`} className="feedProjectPicture"></img> {/* project image */}
                <div className="FeedLiDescr">
                    <FeedDescr profileImg={profileImg} projectDscr={projectDscr} username={username}/>
                </div>
            </li>
        </Link>
        
    )
}


Feed.propTypes = {
    projectImg: PropTypes.string,
    profileImg: PropTypes.string,
    projectDscr: PropTypes.string,
}

export { Feed };