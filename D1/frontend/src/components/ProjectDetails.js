// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";


const ProjectDetails = ({projectName, projectType, projectVersion, projectStatus, projectDescr, projectDate}) => {
    return (
        <div className="projectDetails">
            <link rel="stylesheet" type="text/css" href="/assets/css/ProjectDetails.css"/>


            <h2 className="ProjectName">{projectName}</h2>
            <ul>
                <li><p>Type: {projectType}</p></li>
                <li><p>Version: {projectVersion}</p></li>
                <li><p>Status: {projectStatus}</p></li>
                <li><p>Created: {new Date(projectDate).toLocaleDateString()}</p></li>
            </ul>

            <div>
                <h4>Desription</h4>
                <p>{projectDescr}</p>
            </div>
        </div>
    )
}


export { ProjectDetails }