// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";



const ProfilePreview = ({profileImg, name, email}) => {
    return (
        
        <Link to="/profile" className="memberLink">
            <li>
                <link rel="stylesheet" type="text/css" href="/assets/css/ProfilePreview.css"/>
                <div className="profileLi">
                    <div className="profileLiImg">
                        <img src={`${profileImg}`} className="profilePicture"></img> {/* profile image */}
                    </div>

                    <h3>{`${name}`}</h3>
                    <p>{`${email}`}</p>
                </div>

                {/* <button>x</button> */}
            </li>
        </Link>
    )
}


export { ProfilePreview }