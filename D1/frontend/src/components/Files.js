import React from "react";

import ReactDOM from "react-dom/client";

import { mockProjects } from "./Projects";


const Files = ({files}) => {
    return (
        <ul>
            <h5>Project Files</h5>
            {files.map((file, index) => {
                return <li key={index}>{file}</li>
            })}
        </ul>
    )
}

export {Files}