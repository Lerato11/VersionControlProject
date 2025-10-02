// 6-u21769584

import React from "react";
import ReactDOM from "react-dom";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FeedDescr } from "./FeedDescr";
import { Members } from "./Members";
import { ProjectFeeds } from "./ProjectFeeds";

import { activityFeed } from "./Feeds";
import { mockProjects } from "./Projects";
import { Files } from "./Files";

import {Nav} from "../components/Nav";



const IndivProject = ({id}) => {
    const navigate = useNavigate();


    const [project, setProject] = useState(null);
    const [editMode, setEditMode] = useState("hidden");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);


    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState(""); 
    const [modalMessage, setModalMessage] = useState("");





    const nameRef = useRef();
    const versionRef = useRef();
    const typeRef = useRef();
    const descRef = useRef();

    useEffect(() => {
          const fetchProject = async () => {
            
             try {
                setLoading(true);
                setError("");
    
    
                const response = await fetch(`/api/projects/${id}`);
                const data = await response.json();
    
                  if (!response.ok || !data.success) {
                    setError(data.message);
                    setProject(null);
    
                  } else {
                    setProject(data.project);
                  }
    
              } catch (err) {
                  setError("Network error, try again");
              } finally {
                  setLoading(false);
              }
        };
    
        fetchProject();
    
                
        }, [id])


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

    const loggedInUserName = localStorage.getItem("firstName");
    const loggedInUserId = parseInt(localStorage.getItem("userId"));

const handleLeaveProject = async () => {
    if (!window.confirm("Are you sure you want to leave this project?")) return;

    try {
        const res = await fetch(`/api/projects/leave/${project.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: loggedInUserId })
        });

        const data = await res.json();
        if (res.ok && data.success) {
            alert(data.message);
            
            navigate("/home");
        } else {
            alert(data.message);
        }
    } catch (err) {
        console.error(err);
        alert("Network error, try again");
    }
};

    const handleModalSubmit = async () => {
        try {
            console.log("Submitting", modalType, "to", `/api/projects/${modalType === "checkout" ? "checkOut" : "checkIn"}/${project.id}`);
            const res = await fetch(`/api/projects/${modalType === "checkout" ? "checkOut" : "checkIn"}/${project.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: loggedInUserId,
                message: modalMessage
            })
            });

            const data = await res.json();

            if (res.ok && data.success) {
                alert(data.message);

                // project activities
                setProject(prev => ({
                    ...prev,
                    status: modalType === "checkout" ? "Checked Out" : "Checked In",
                    checkedOutBy: modalType === "checkout" ? loggedInUserId : null,
                    activities: [...prev.activities, {
                    type: modalType === "checkout" ? "Checked Out" : "Checked In",
                    modifiedBy: loggedInUserName, 
                    comment: modalMessage
                    }]
                }));


                // global activities

                await fetch("/api/feeds", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: modalMessage,
                    user_id: loggedInUserId,
                    project_id: project.id,
                    type: modalType === "checkout" ? "Checked Out" : "Checked In"
                })
            });


            } else {
                alert(data.message || "Action failed");
            }
        } catch (err) {
            console.error(err);
            alert("Network error");
        } finally {
            setModalMessage("");
            setModalOpen(false);
        }
    };



    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!project) return <p>No project found</p>;


    return (
        <>
         <div className="IndivProjectDiv">
         <link rel="stylesheet" type="text/css" href="/assets/css/IndivProject.css"/>
         
            <div>
                <div className="IndivOuterProjectDiv">
                    <div className="ProjectInfoDiv">

                        <div className="projectIndivImage">
                            <img src={project.projectImage} alt={project.name}></img> {/* project image */}
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
                                    <li><p>Status: {project.status}</p></li>
                                </ul>
                            </div>

                             <div className="ProjectButtonsDiv">
                                    <button onClick={onEditProject}>
                                        {"Edit Project"}
                                    </button>

                                    
                                    
                                    <button
                                        disabled={project.status === "Checked Out" && project.checkedOutBy !== loggedInUserId}
                                        onClick={() => { setModalType("checkout"); setModalOpen(true); }}
                                        >
                                        Check Out
                                    </button>

                                    <button
                                        disabled={project.checkedOutBy !== loggedInUserId}
                                        onClick={() => { setModalType("checkin"); setModalOpen(true); }}
                                        >
                                        Check In
                                    </button>



                                    <button onClick={handleLeaveProject}>Leave Project</button>
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
                                <h2>Edit Project</h2>
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


            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                    <h2>{modalType === "checkout" ? "Check Out Project" : "Check In Project"}</h2>
                    <textarea
                        placeholder="Enter a message..."
                        value={modalMessage}
                        onChange={(e) => setModalMessage(e.target.value)}
                    />

                    <div className="modal-actions">
                        <button onClick={() => setModalOpen(false)}>Cancel</button>
                        <button onClick={async () => {
                            await handleModalSubmit();
                            setModalOpen(false);
                            }}>
                            Submit
                        </button>
                    </div>
                    </div>
                </div>
                )}



            </div>


                <div className="MembersDiv">
                    <Members projectId={project.id}/>
                </div>
                
                </div>

                <div className="ProjectFeedDiv">

                    <ProjectFeeds activities={project.activities}/>
                    
                </div>

            </div>
        </>

    )
}


export { IndivProject }
