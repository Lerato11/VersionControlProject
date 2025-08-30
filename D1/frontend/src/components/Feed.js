import React from "react";
import ReactDOM from "react-dom/client";

import PropTypes from 'prop-types';


const Feed = ({projectImg, profileImg, projectDscr}) => {
    return (
        <li>
            <img src={`${projectImg}`}></img> {/* project image */}
            <div>
                <img src={`${profileImg}`}></img> {/* profile image */}
                <p>{`${projectDscr}`}</p>
            </div>
        </li>
    )
}


Feed.propTypes = {
    projectImg: PropTypes.string,
    profileImg: PropTypes.string,
    projectDscr: PropTypes.string,
}