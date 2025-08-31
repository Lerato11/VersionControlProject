import React from "react";
import ReactDOM from "react-dom";

import { useState, useRef } from "react";

import { FeedDescr } from "./FeedDescr";
import { Members } from "./Members";
import { ProjectFeeds } from "./ProjectFeeds";

import { activityFeed } from "./Feeds";
import { mockProjects } from "./Projects";
import { Files } from "./Files";

import {Nav} from "../components/Nav";



const IndivProject = ({id}) => {

   const projectData = mockProjects.find((p) => p.id === parseInt(id));

    if (!projectData) {
      return <div>Project not found.</div>;
    }


    const [project, setProject] = useState(projectData);

    const [editMode, setEditMode] = useState("hidden");


    const nameRef = useRef();
    const versionRef = useRef();
    const typeRef = useRef();
    const descRef = useRef();

    const onEditProject =(event) => {
        event.preventDefault();

        if (editMode == "hidden"){
            setEditMode("visible");
        } else {
            setEditMode("hidden");
        }
    }

    const saveEdit = (e) => {
        e.preventDefault();
        setProject({
            ...project,
            name: nameRef.current.value,
            version: versionRef.current.value,
            type: typeRef.current.value,
            description: descRef.current.value,
        });

        setEditMode("hidden");
    };

    return (
        <>
         <div className="IndivProjectDiv">
         <link rel="stylesheet" type="text/css" href="/assets/css/IndivProject.css"/>
         
            <div>
                <div>
                    <div>
                        <img src={project.image} alt={project.name}></img> {/* project image */}
                        <div>
                            <ul>
                                <h5>Project Languages</h5>
                                {project.languages.map((language, index) => {
                                    return <li key={index}>{language}</li>
                                })}
                            </ul>

                            <Files files={project.files} />
                        </div>
                    </div>

                    <div>
                        <h3>{project.name}</h3>
                        <ul>
                            <li><p>Type: {project.type}</p></li>
                            <li><p>Version: {project.version}</p></li>
                            <li><p>Status: {project.status}</p></li>
                        </ul>

                        <div>
                            <h4>Desription</h4>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <form className={editMode} onSubmit={saveEdit}>
                        <h4>Edit Project</h4>
                        <label>Name:</label>
                        <input defaultValue={project.name} ref={nameRef} />
                        <br/>
                        <label>Version:</label>
                        <input defaultValue={project.version} ref={versionRef} />
                        <br/>

                        <label>Type:</label>
                        <input defaultValue={project.type} ref={typeRef} />
                        <br/>

                        <label>Description:</label>
                        <textarea defaultValue={project.description} ref={descRef} />

                        <button type="submit">Save</button>
                    </form>

                    <button onClick={onEditProject}>
                        {editMode === "hidden" ? "Edit Project" : "Cancel"}
                    </button>
                </div>


                <div>
                    <Members projectId={project.id}/>
                </div>
            </div>

            <div>
                <h2>Activity Feed</h2>

                <ProjectFeeds projectId={id}/>
                
            </div>

        </div>
        </>

    )
}


export { IndivProject }
