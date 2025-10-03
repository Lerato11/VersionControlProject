// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";

import { mockProjects } from "./Projects";


const Files = ({ files, projectId }) => {
  if (!files || files.length === 0) return <p>No files uploaded</p>;

  return (
    <ul>
      {files.map((file, idx) => {
        // const fileName = file.split("/").pop(); // show only filename
        return (
          <li key={idx}>
            <a href={`/api/projects/downloadFile/${projectId}/${file}`} download>
                {file}
            </a>
          </li>
        );
      })}
    </ul>
  );
};


export {Files}