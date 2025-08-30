import React from "react";

import ReactDOM from "react-dom/client";

import {Project} from "./Project";

const mockProjects = [
  {
    id: 1,
    image: "https://example.com/project1.jpg", // replace with actual
    name: "AuthFlow",
    languages: ["JavaScript", "Node.js", "React"],
    version: "1.2.3",
    type: "Web",
    description: "A secure authentication and authorization system with OAuth2 support.",
    state: "Checked In"
  },
  {
    id: 2,
    image: "https://example.com/project2.jpg",
    name: "FinTrack",
    languages: ["Python", "Django", "SQL"],
    version: "0.9.5",
    type: "Web",
    description: "A financial tracker for managing budgets, expenses, and investments.",
    state: "Checked Out"
  },
  {
    id: 3,
    image: "https://example.com/project3.jpg",
    name: "GameForge",
    languages: ["C++", "OpenGL"],
    version: "2.1.0",
    type: "Desktop",
    description: "A lightweight 2D/3D game engine for indie developers.",
    state: "Checked In"
  },
  {
    id: 4,
    image: "https://example.com/project4.jpg",
    name: "MediScan",
    languages: ["Java", "Spring Boot"],
    version: "1.0.0",
    type: "Desktop",
    description: "Medical imaging software with AI-based scan analysis.",
    state: "Checked Out"
  },
  {
    id: 5,
    image: "https://example.com/project5.jpg",
    name: "ShopEasy",
    languages: ["JavaScript", "Vue.js", "Firebase"],
    version: "3.0.2",
    type: "Web",
    description: "An e-commerce platform for small businesses with integrated payment gateway.",
    state: "Checked In"
  },
  {
    id: 6,
    image: "https://example.com/project6.jpg",
    name: "TaskFlow",
    languages: ["Kotlin", "Jetpack Compose"],
    version: "0.5.8",
    type: "Mobile",
    description: "A task management and productivity app with offline sync.",
    state: "Checked Out"
  },
  {
    id: 7,
    image: "https://example.com/project7.jpg",
    name: "DataViz Pro",
    languages: ["R", "Python", "D3.js"],
    version: "4.2.1",
    type: "Desktop",
    description: "Advanced data visualization suite with custom chart support.",
    state: "Checked In"
  },
  {
    id: 8,
    image: "https://example.com/project8.jpg",
    name: "TravelMate",
    languages: ["Swift", "Objective-C"],
    version: "2.0.0",
    type: "Mobile",
    description: "An iOS app for planning trips, booking hotels, and sharing itineraries.",
    state: "Checked In"
  },
  {
    id: 9,
    image: "https://example.com/project9.jpg",
    name: "NewsHub",
    languages: ["React", "Express", "MongoDB"],
    version: "1.4.7",
    type: "Web",
    description: "Centralized news aggregator with personalized recommendations.",
    state: "Checked Out"
  },
  {
    id: 10,
    image: "https://example.com/project10.jpg",
    name: "StockPulse",
    languages: ["C#", ".NET", "SQL Server"],
    version: "0.8.3",
    type: "Desktop",
    description: "Stock market analysis tool with live data visualization.",
    state: "Checked In"
  }
];

const Projects = () => {
    return (
        <>
            <h2>Projects</h2>
                <button>+ Project</button>
         
                  <ul>
                    {mockProjects.map((project, projectIndex) => {
                      return <Project key= {projectIndex} project= {project} />
                    })}
                  </ul>
        </>
    )
}

