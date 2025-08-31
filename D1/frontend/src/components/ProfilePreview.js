import React from "react";

import ReactDOM from "react-dom/client";


const ProfilePreview = ({profileImg, name, email}) => {
    return (
        <li>
            <img src={`${profileImg}`}></img> {/* profile image */}
            
            <h3>{`${name}`}</h3>
            <p>{`${email}`}</p>

            {/* <button>x</button> */}
        </li>
    )
}


export { ProfilePreview }