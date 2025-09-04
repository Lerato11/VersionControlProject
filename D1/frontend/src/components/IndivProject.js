// 6-u21769584

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
                <div className="IndivOuterProjectDiv">
                    <div className="ProjectInfoDiv">

                        <div className="projectIndivImage">
                            <img src={project.image} alt={project.name}></img> {/* project image */}
                        </div>

                        <div className="fileNames">


                             <div >
                                <h5>Files</h5>
                                <Files files={project.files} />
                                <div>
                                    <button >Download Files</button>
                                </div>
                            </div>

                            <div>
                                <h5>Languages</h5>

                                <ul>
                                    {project.languages.map((language, index) => {
                                        return <li key={index}>{language}</li>
                                    })}
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="projectIndivDetails">
                        <div className="InfoDetailsHeader">
                            <div>
                                <h1>{project.name}</h1>
                                <ul>
                                    <li><p>Type: {project.type}</p></li>
                                    <li><p>Version: {project.version}</p></li>
                                    <li><p>Status: {project.state}</p></li>
                                </ul>
                            </div>

                             <div className="ProjectButtonsDiv">
                                    <button onClick={onEditProject}>
                                        {"Edit Project"}
                                    </button>

                                    <button>Check In</button>
                                    <button>Check Out</button>
                            </div>
                        </div>
                                        
                            <div>
                                <h4>Desription</h4>
                                <p>{project.description}</p>
                            </div>

                    </div>
                    
                </div>

            <div>

            {editMode === "visible" && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h2>Edit Projects</h2>
                            </div>

                            <div>
                                <button
                                    className="close-btn"
                                    onClick={() => setEditMode("hidden")}> &times;</button>
                            </div>

                        </div>


                    

                        <form className="add-project-form" onSubmit={saveEdit}>
                            <span></span>
                            <label>Name:</label>
                            <input defaultValue={project.name} ref={nameRef} />
                            <span></span>
                            <br />


                            <label>Version:</label>
                            <input defaultValue={project.version} ref={versionRef} />
                                    <span></span>
                            <br />


                            <label>Type:</label>
                            <input defaultValue={project.type} ref={typeRef} />
                                    <span></span>
                            <br />
                            

                            <label>Description:</label>
                            <textarea defaultValue={project.description} ref={descRef} />
                                    <span></span>
                            <br />


                            <button type="submit">Save</button>
                        </form>
                    </div>
                </div>
            )}
            </div>


                <div className="MembersDiv">
                    <Members projectId={project.id}/>
                </div>
                
                </div>

                <div className="ProjectFeedDiv">

                    <ProjectFeeds projectId={id}/>
                    
                </div>

            </div>
        </>

    )
}


export { IndivProject }
