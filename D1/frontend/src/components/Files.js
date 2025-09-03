// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";

import { mockProjects } from "./Projects";


const Files = ({files}) => {
    return (
        <ul>
            {files.map((file, index) => {
                return <li key={index}>{file}</li>
            })}
        </ul>
    )
}

export {Files}