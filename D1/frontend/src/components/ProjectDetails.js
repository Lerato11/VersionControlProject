import React from "react";

import ReactDOM from "react-dom/client";


const ProjectDetails = ({projectName, projectType, projectVersion, projectStatus, projectDescr}) => {
    return (
        <>
            <h3>{projectName}</h3>
            <ul>
                <li><p>Type: {projectType}</p></li>
                <li><p>Version: {projectVersion}</p></li>
                <li><p>Status: {projectStatus}</p></li>
            </ul>

            <div>
                <h4>Desription</h4>
                <p>{projectDescr}</p>
            </div>
        </>
    )
}


export { ProjectDetails }