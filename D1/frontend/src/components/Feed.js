import React from "react";
import ReactDOM from "react-dom/client";

import {PropTypes} from 'prop-types';

import {FeedDescr} from './FeedDescr'


const Feed = ({activity, projectImg, profileImg, projectDscr, username}) => {
    return (
        <li>
            <img src={`${projectImg}`}></img> {/* project image */}
            <FeedDescr profileImg={profileImg} activity={activity} projectDscr={projectDscr} username={username}/>
        </li>
    )
}


Feed.propTypes = {
    projectImg: PropTypes.string,
    profileImg: PropTypes.string,
    projectDscr: PropTypes.string,
}

export { Feed };