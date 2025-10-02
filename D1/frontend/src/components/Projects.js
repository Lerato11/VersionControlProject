// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useState, useRef, useEffect } from "react";


import { Project } from "./Project";
import { mockMembers } from "./Members";
import { AddProject } from "./AddProject";
// import { useState } from "react";


const mockProjects = [
  {
    id: 1,
    image: "/assets/images/auth0-project.png",
    name: "AuthFlow",
    languages: ["JavaScript", "Node.js", "React"],
    version: "1.2.3",
    type: "Web",
    description: "A secure authentication and authorization system with OAuth2 support.",
    state: "Checked In",
    activities: [
      { type: "Checked in", modifiedBy: "Lerato Matsile", comment: "Initial commit for user authentication." },
      { type: "Checked out", modifiedBy: "Maya Patel", comment: "Added password reset functionality." },
      { type: "Checked in", modifiedBy: "Amara Johnson", comment: "Implemented OAuth2 for Google login." }
    ],
    files: ["auth.js", "user.js", "login.html", "dashboard.css"]
  },
  {
    id: 2,
    image: "/assets/images/fintrack-projects.jpg",
    name: "FinTrack",
    languages: ["Python", "Django", "SQL"],
    version: "0.9.5",
    type: "Web",
    description: "A financial tracker for managing budgets, expenses, and investments.",
    state: "Checked Out",
    activities: [
      { type: "Checked in", modifiedBy: "Kai Chen", comment: "Setup Django ORM models for transactions." },
      { type: "Checked out", modifiedBy: "Noah Smith", comment: "Developed budget creation form and logic." },
      { type: "Checked in", modifiedBy: "Sofia Lopez", comment: "Bug fix: corrected an issue with expense calculations." }
    ],
    files: ["models.py", "views.py", "urls.py", "database.sql"]
  },
  {
    id: 3,
    image: "/assets/images/gameTrack-project.webp",
    name: "GameForge",
    languages: ["C++", "OpenGL"],
    version: "2.1.0",
    type: "Desktop",
    description: "A lightweight 2D/3D game engine for indie developers.",
    state: "Checked In",
    activities: [
      { type: "Checked in", modifiedBy: "Ethan Walker", comment: "Initial app skeleton with OpenGL context." },
      { type: "Checked out", modifiedBy: "Zane Roberts", comment: "Added basic 2D rendering pipeline." },
      { type: "Checked in", modifiedBy: "Maya Patel", comment: "Implemented scene management system." }
    ],
    files: ["engine.cpp", "renderer.h", "shaders.glsl", "input.cpp"]
  },
  {
    id: 4,
    image: "/assets/images/medical-project.jpg",
    name: "MediScan",
    languages: ["Java", "Spring Boot"],
    version: "1.0.0",
    type: "Desktop",
    description: "Medical imaging software with AI-based scan analysis.",
    state: "Checked Out",
    activities: [
      { type: "Checked in", modifiedBy: "Lerato Matsile", comment: "Setup Spring Boot project with core dependencies." },
      { type: "Checked out", modifiedBy: "Noah Smith", comment: "Integrated openCV for image processing." },
      { type: "Checked in", modifiedBy: "Leo Williams", comment: "Initial version of the scan analysis algorithm." }
    ],
    files: ["Main.java", "ImageProcessor.java", "Model.java", "UI.java"]
  },
  {
    id: 5,
    image: "/assets/images/ecommerce-projects.jpg",
    name: "ShopEasy",
    languages: ["JavaScript", "Vue.js", "Firebase"],
    version: "3.0.2",
    type: "Web",
    description: "An e-commerce platform for small businesses with integrated payment gateway.",
    state: "Checked In",
    activities: [
      { type: "Checked in", modifiedBy: "Aisha Khan", comment: "Project setup and Firebase configuration." },
      { type: "Checked out", modifiedBy: "Noah Smith", comment: "Developed product display and cart functionality." },
      { type: "Checked in", modifiedBy: "Lerato Matsile", comment: "Implemented Stripe payment gateway integration." }
    ],
    files: ["App.vue", "store.js", "firebase.js", "router.js"]
  },
  {
    id: 6,
    image: "/assets/images/tasks-projects.jpg",
    name: "TaskFlow",
    languages: ["Kotlin", "Jetpack Compose"],
    version: "0.5.8",
    type: "Mobile",
    description: "A task management and productivity app with offline sync.",
    state: "Checked Out",
    activities: [
      { type: "Checked in", modifiedBy: "Ethan Walker", comment: "Initial app skeleton with Jetpack Compose." },
      { type: "Checked out", modifiedBy: "Amara Johnson", comment: "Added task creation and edit functionality." },
      { type: "Checked in", modifiedBy: "Zane Roberts", comment: "Implemented local database for offline support." }
    ],
    files: ["MainActivity.kt", "Task.kt", "ViewModel.kt", "database.kt"]
  },
  {
    id: 7,
    image: "/assets/images/data-projects.webp",
    name: "DataViz Pro",
    languages: ["R", "Python", "D3.js"],
    version: "4.2.1",
    type: "Desktop",
    description: "Advanced data visualization suite with custom chart support.",
    state: "Checked In",
    activities: [
      { type: "Checked in", modifiedBy: "Noah Smith", comment: "Initial Python and R script integration." },
      { type: "Checked out", modifiedBy: "Amara Johnson", comment: "Added new chart types with D3.js." },
      { type: "Checked in", modifiedBy: "Amara Johnson", comment: "Improved data handling and loading performance." }
    ],
    files: ["main.py", "charts.js", "data.R", "ui.py"]
  },
  {
    id: 8,
    image: "/assets/images/travel-projects.jpg",
    name: "TravelMate",
    languages: ["Swift", "Objective-C"],
    version: "2.0.0",
    type: "Mobile",
    description: "An iOS app for planning trips, booking hotels, and sharing itineraries.",
    state: "Checked In",
    activities: [
      { type: "Checked in", modifiedBy: "Maya Patel", comment: "Initial project setup in Xcode." },
      { type: "Checked out", modifiedBy: "Aisha Khan", comment: "Created itinerary and travel planner views." },
      { type: "Checked in", modifiedBy: "Zane Roberts", comment: "Implemented map-based hotel search." }
    ],
    files: ["AppDelegate.swift", "TravelView.swift", "Itinerary.h", "MapViewController.swift"]
  },
  {
    id: 9,
    image: "/assets/images/news-projetcs.jpg",
    name: "NewsHub",
    languages: ["React", "Express", "MongoDB"],
    version: "1.4.7",
    type: "Web",
    description: "Centralized news aggregator with personalized recommendations.",
    state: "Checked Out",
    activities: [
      { type: "Checked in", modifiedBy: "Ethan Walker", comment: "Frontend structure and API call setup." },
      { type: "Checked out", modifiedBy: "Leo Williams", comment: "Developed recommendation engine logic." },
      { type: "Checked in", modifiedBy: "Sofia Lopez", comment: "Deployed to a staging environment for testing." }
    ],
    files: ["App.jsx", "server.js", "database.js", "api.js"]
  },
  {
    id: 10,
    image: "/assets/images/stocks-projects.jpg",
    name: "StockPulse",
    languages: ["C#", ".NET", "SQL Server"],
    version: "0.8.3",
    type: "Desktop",
    description: "Stock market analysis tool with live data visualization.",
    state: "Checked In",
    activities: [
      { type: "Checked in", modifiedBy: "Leo Williams", comment: "Initial C# project setup and SQL server connection." },
      { type: "Checked out", modifiedBy: "Sofia Lopez", comment: "Implemented live data fetching and charting." },
      { type: "Checked in", modifiedBy: "Lerato Matsile", comment: "Added predictive analysis model." }
    ],
    files: ["MainWindow.cs", "DataService.cs", "Database.cs", "ChartControl.cs"]
  }
];


const Projects = (props) => {

  

  const [projects, setProjects] = useState(mockProjects);

  const [addFormClass, setAddFormClass] = useState("hidden");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  let userId = localStorage.getItem("userId");


  useEffect(() => {
      const fetchProjects = async () => {
        
         try {
              

            if (!userId) {
              setError("No user logged in");
              setLoading(false);
              return;
            }


            const response = await fetch(`/api/projects/user?id=${userId}`);
            const data = await response.json();

              if (!response.ok) {
                setError(data.message);

              } else {
                setProjects(data.projects);
              }

          } catch (err) {
              setError("Network error, try again");
          } finally {
              setLoading(false);
          }
    };

    if (userId) fetchProjects();

            
    }, [userId])
    

  const handleAddProject = async (project) => {

    try {
        const res = await fetch("/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
            alert(data.message );

        } else {
            console.log("Project added:", data.createdProject);
            
            setProjects(prev => [...prev, data.createdProject]);
        }
    } catch (err) {
        console.error("Network error:", err);
    }
    setAddFormClass("hidden");
  };

  const handleCancelAdd = () => {
    setAddFormClass("hidden");
  };


  const onAddProject = (event) => {
    event.preventDefault();

    if (addFormClass == "hidden") {
      setAddFormClass("visible");
    }
  }

  if (props.userId != undefined) {

    const user = mockMembers.find(member => member.id === props.userId);


    if (!user) {
      return <h2>User not found.</h2>;
    }

    const userProjects = projects.filter(project =>
      user.projects.includes(project.id)
    );


    if (loading) return <h2>Loading projects...</h2>;

    if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

    return (
      <>
        <link rel="stylesheet" type="text/css" href="/assets/css/Projects.css" />

        <div className="ProjectsHeaders">
          <h2 className="ProjectH2-2">Projects</h2>

          <button onClick={onAddProject}>+ Project</button>

        </div>

        <ul className="ProjectsProfileDiv">
          {addFormClass === "visible" && (
            <div className="modal-overlay">
              <div className="modal-content">


                <AddProject onAddProject={handleAddProject} onCancel={handleCancelAdd} />
              </div>
            </div>
          )}

          {userProjects.map((project, projectIndex) => {
            return <Project key={projectIndex} project={project} />
          })}
        </ul>

      </>
    )
  }

  return (
    <>
      <link rel="stylesheet" type="text/css" href="/assets/css/Projects.css" />

      <div className="ProjectsHeaders">
        <h2 className="ProjectH2-2">All Projects</h2>
        <button onClick={onAddProject}>+ Project</button>
      </div>

      <ul className="ProjectsProfileDiv">
          {addFormClass === "visible" && (
            <div className="modal-overlay">
              <div className="modal-content">
                {/* <button className="close-btn" onClick={handleCancelAdd}>&times;</button> */}
                <AddProject onAddProject={handleAddProject} onCancel={handleCancelAdd} />
              </div>
            </div>
          )}

          {projects.map((project, index) => (

            <Project key={index} project={project} />
            // </Link>x
          ))}
      </ul>
    </>
  );
}

export { Projects, mockProjects }