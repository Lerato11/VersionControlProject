// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";


const ProjectHeader = ({projectImg, languages}) => {
    return (
        <>
        <link rel="stylesheet" type="text/css" href="/assets/css/ProjectHeader.css"/>
        <div className="projectHeader">

            <div className="projectImgBorder">
                <img src={`${projectImg}` } className="projectPicture"></img> {/* project image */}
            </div>
                <ul>
                    <h5>Project Languages</h5>
                    {languages.map((language, index) => {
                        return <li key={index}>{`${language}`}</li>
                    })}
                </ul>
            </div>
        </>
    )
}

export { ProjectHeader }