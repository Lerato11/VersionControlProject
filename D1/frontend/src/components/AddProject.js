// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";
import { useState } from "react";

const AddProject = ({ onAddProject, onCancel, className }) => {
    const [project, setProject] = useState({
        name: '',
        languages: [],
        version: '',
        type: '',
        description: '',
    });

    const [currentLanguage, setCurrentLanguage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject(prevProject => ({
            ...prevProject,
            [name]: value,
        }));
    };

    const handleAddLanguage = () => {
        if (currentLanguage.trim() !== '') {
            setProject(prevProject => ({
                ...prevProject,
                languages: [...prevProject.languages, currentLanguage.trim()],
            }));
            setCurrentLanguage('');
        }
    };

    const handleRemoveLanguage = (langToRemove) => {
        setProject(prevProject => ({
            ...prevProject,
            languages: prevProject.languages.filter(lang => lang !== langToRemove),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProject(project);

        setProject({
        name: "",
        languages: [],
        version: "",
        type: "",
        description: "",
        });
        setCurrentLanguage("");
    };

    const handleCancel = () => {
        setProject({
        name: "",
        languages: [],
        version: "",
        type: "",
        description: "",
        });
        setCurrentLanguage("");
    };

    return (
        <div>
          <link rel="stylesheet" type="text/css" href="/assets/css/Projects.css"/>

            <div className="modal-header">
                
                <div>
                    <h2>Create New Project</h2>
                </div>

                <div>
                    <button className="close-btn" onClick={onCancel}>&times;</button>
                </div>

            </div>

            <form onSubmit={handleSubmit}  className="add-project-form">

                <div>
                    <label htmlFor="name">Project Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={project.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <span></span>
                <br/>


                <div>
                    <label htmlFor="languages">Languages</label>
                    <div>
                        <input
                            type="text"
                            id="languages"
                            value={currentLanguage}
                            onChange={(e) => setCurrentLanguage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddLanguage();
                                }
                            }}
                            placeholder="e.g., JavaScript"
                        />
                        <button type="button" onClick={handleAddLanguage}>Add</button>
                    </div>

                    <div>
                        {project.languages.map((lang, index) => (
                            <span key={index} className="language-tag">
                                {lang}
                                <button type="button" onClick={() => handleRemoveLanguage(lang)}>
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
                <span></span>
                <br/>

                <div>
                    <label htmlFor="version">Version</label>
                    <input
                        type="text"
                        id="version"
                        name="version"
                        value={project.version}
                        onChange={handleInputChange}
                    />
                </div>
                <span></span>
                <br/>

                <div>
                    <label htmlFor="type">Type</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={project.type}
                        onChange={handleInputChange}
                    />
                </div>
                <span></span>
                <br/>


                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={project.description}
                        onChange={handleInputChange}
                        rows="4"
                    />
                </div>
                <span></span>
                <br/>

                <button type="submit">Create</button>
                
            </form>
        </div>
    );
};

export {AddProject}
