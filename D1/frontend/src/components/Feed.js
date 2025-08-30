import React from "react";
import ReactDOM from "react-dom/client";

import {PropTypes} from 'prop-types';


const Feed = ({projectImg, profileImg, projectDscr, username}) => {
    return (
        <li>
            <img src={`${projectImg}`}></img> {/* project image */}
            <div>
                <img src={`${profileImg}`}></img> {/* profile image */}
                <div>
                    <h5>{username}</h5>
                    <p>{`${projectDscr}`}</p>
                </div>
            </div>
        </li>
    )
}


Feed.propTypes = {
    projectImg: PropTypes.string,
    profileImg: PropTypes.string,
    projectDscr: PropTypes.string,
}

export { Feed };