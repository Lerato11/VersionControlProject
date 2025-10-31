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
import { PopupMessage } from "./PopupMessage";

// import {image} from "../../public/assets/images/"

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

    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [leaveModalOpen, setLeaveModalOpen] = useState(false);
    
    const [popup, setPopup] = useState({ show: false, message: "", type: "success" });

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

    const saveEdit = async (e) => {
        e.preventDefault();

        const updatedProject = {
            name: nameRef.current.value,
            version: versionRef.current.value,
            type: typeRef.current.value,
            description: descRef.current.value,
        };

        try {
            const res = await fetch(`/api/projects/${project.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },

                body: JSON.stringify({ 
                    updates: updatedProject 
                }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setProject((prev) => ({ ...prev, ...updatedProject }));
                // alert("Project updated successfully!");
                setPopup({ show: true, message: "Project updated successfully!", type: "success" });

            } else {
                setPopup({ show: true, message: data.message, type: "error" });
                // alert(data.message || "Failed to update project");
            }

        } catch (err) {
            setPopup({ show: true, message: "Network error while saving changes", type: "error" });

            // alert("Network error while saving changes");
            // console.error(err);
        }

        setEditMode("hidden");
    };


    const loggedInUserName = localStorage.getItem("firstName");
    const loggedInUserId = parseInt(localStorage.getItem("userId"));


    const handleLeaveProject = () => {
        setLeaveModalOpen(true);
    };

const confirmLeaveProject = async () => {

    try {
        const res = await fetch(`/api/projects/leave/${project.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: loggedInUserId })
        });

        const data = await res.json();
        if (res.ok && data.success) {
            // alert(data.message);
            setPopup({ show: true, message: data.message, type: "success" });

            
            navigate("/home");
        } else {
            setPopup({ show: true, message: data.message, type: "error" });

            // alert(data.message);
        }
    } catch (err) {
        // console.error(err);
        // alert("Network error, try again");
        setPopup({ show: true, message: "Network error, try again", type: "error" });

    }
};

    const handleModalSubmit = async () => {
        try {
            const res = await fetch(`/api/projects/${modalType === "checkout" ? "checkOut" : "checkIn"}/${project.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: loggedInUserId,
                    message: modalMessage
                })
            });

            if (modalType === "checkin" && selectedFiles?.length > 0) {
                const formData = new FormData();
                for (let file of selectedFiles) {
                    formData.append("files", file);
                }

                await fetch(`/api/projects/uploadFiles/${project.id}`, {
                    method: "POST",
                    body: formData
                });
            }

            const data = await res.json();

            if (res.ok && data.success) {
                // alert(data.message);
                setPopup({ show: true, message: data.message, type: "success" });


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
                setPopup({ show: true, message: data.message, type: "error" });

                // alert(data.message || "Action failed");
            }
        } catch (err) {
            // console.error(err);
            // alert("Network error");
            setPopup({ show: true, message: "Network error", type: "error" });

        } finally {
            setModalMessage("");
            setModalOpen(false);
        }
    };



    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!project) return <p>No project found</p>;

    const handleImageUpload = async (e) => {
        e.preventDefault();

        if (!selectedImage) return setPopup({ show: true, message: "No image selected!", type: "error" });

        const formData = new FormData();
        formData.append("idNum", project.id);
        formData.append("image", selectedImage);

        const res = await fetch("/api/projects/projectImage", {
            method: "PATCH",
            body: formData,
        });

        // console.log(formData);

        const data = await res.json();
        
        if (res.ok && data.success) {
            setProject(data.project);
            setShowImageModal(false);

        } else {
            setPopup({ show: true, message: data.message, type: "error" });

            // alert(data.message || "Upload failed");
        }
    };

    const isMember = project.members?.includes(loggedInUserId);

    return (
        <>
         <div className="IndivProjectDiv">
        <link rel="stylesheet" type="text/css" href="/assets/css/PopupMessage.css"/>

         <link rel="stylesheet" type="text/css" href="/assets/css/IndivProject.css"/>
         
            <div>
                <div className="IndivOuterProjectDiv">
                    <div className="ProjectInfoDiv">

                        <div className="projectIndivImage" onClick={isMember ? () => setShowImageModal(true) : null} style={{ cursor: isMember ? "pointer" : "not-allowed" }}>
                            <img src={project.projectImage} alt={project.name}></img> 
                        </div>


                        {showImageModal && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h2>Upload Project Image</h2>
                                    <button className="close-btn" onClick={() => setShowImageModal(false)}>
                                    &times;
                                    </button>
                                </div>

                                <form onSubmit={handleImageUpload}>
                                    <input 
                                        type="file" 
                                        id="choose-file"
                                        accept="image/*"
                                        onChange={(e) => setSelectedImage(e.target.files[0])}
                                        style={{ display: "none" }}
                                    />
                                    <label htmlFor="choose-file" className="uploadButton">Choose File</label>

                                    {selectedImage && (
                                        <span className="file-name">{selectedImage.name}</span>
                                    )}

                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <button type="submit">Upload</button>
                                </form>
                                </div>
                            </div>
                            )}

                        <div className="fileNames">


                             <div >
                                <h5>Files</h5>
                                <Files files={project.files} projectId={project.id} />
   
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
                                    <li><p>Created: {new Date(project.createdAt).toLocaleDateString()}</p></li>
                                </ul>
                            </div>

                             <div className="ProjectButtonsDiv">
                                    <button onClick={onEditProject} disabled={!isMember}>
                                        {"Edit Project"}
                                    </button>

                                    
                                    
                                    <button
                                        disabled={!isMember || (project.status === "Checked Out" && project.checkedOutBy !== loggedInUserId)}
                                        onClick={() => { setModalType("checkout"); setModalOpen(true); }}
                                        >
                                        Check Out
                                    </button>

                                    <button
                                        disabled={!isMember || project.checkedOutBy !== loggedInUserId}
                                        onClick={() => { setModalType("checkin"); setModalOpen(true); }}
                                        >
                                        Check In
                                    </button>



                                    <button onClick={handleLeaveProject} disabled={!isMember}>Leave Project</button>
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

    
                    <div className="modal-header">
                        <h2>{modalType === "checkout" ? "Check Out Project" : "Check In Project"}</h2>
                        <button className="close-btn" onClick={() => setModalOpen(false)}>
                        &times;
                        </button>
                    </div>

                 
                    <div className="add-project-form">
                        <label>Enter a message... :</label>
                        <textarea
                        placeholder="Enter a message..."
                        value={modalMessage}
                        onChange={(e) => setModalMessage(e.target.value)}
                        />

                        {modalType === "checkin" && (
                        <>  
                        <label>Upload Project Files :</label>

                            <input 
                                id="file-upload"
                                type="file" 
                                multiple 
                                onChange={(e) => setSelectedFiles(e.target.files)} 
                                style={{ display: "none" }} // hidden
                                />

                            
                            <label htmlFor="file-upload" className="uploadButton">
                                Choose Files
                            </label>
                        </>  
                        )}

                        <div className="modal-actions">
                        {/* <button type="button" onClick={() => setModalOpen(false)}>Cancel</button> */}
                        <button type="button" onClick={async () => {
                            await handleModalSubmit();
                            setModalOpen(false);
                        }}>
                            Submit
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            )}

            {popup.show && (
                <PopupMessage
                    message={popup.message}
                    type={popup.type}
                    onClose={() => setPopup({ ...popup, show: false })}
                />
            )}

            {leaveModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h2>Leave Project</h2>
                        <button className="close-btn" onClick={() => setLeaveModalOpen(false)}>
                        &times;
                        </button>
                    </div>

                    <p>Are you sure you want to leave <strong>{project.name}</strong>?</p>

                    <div className="modal-actions" style={{ marginTop: "20px", textAlign: "right" }}>
                        <button
                            type="button"
                            onClick={() => setLeaveModalOpen(false)}
                            style={{ marginRight: "10px" }}
                            >
                            Cancel
                        </button>

                        <button
                            type="button"
                            onClick={confirmLeaveProject}
                            className="uploadButton"
                            style={{ backgroundColor: "#c0392b" }}
                            >
                            Leave
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
