import React from "react";
import ReactDOM from "react-dom/client";

import {PropTypes} from 'prop-types';


const FeedDescr = ({activity, profileImg, projectDscr, username}) => {
    return (
            <div>
                <img src={`${profileImg}`}></img> {/* profile image */}
                <div>
                    <h5>{username}</h5>
                    <p>{`${projectDscr}`}</p>
                </div>
            </div>
    )
}


// Feed.propTypes = {
//     projectImg: PropTypes.string,
//     profileImg: PropTypes.string,
//     projectDscr: PropTypes.string,
// }

export { FeedDescr };