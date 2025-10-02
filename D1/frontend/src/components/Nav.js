// 6-u21769584

import React from "react";
import ReactDOM from "react-dom/client";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { Search } from "./Search";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear all stored user data
        localStorage.clear();

        // Redirect to landing page
        navigate("/");
    };
    
  return (
    <nav className="navBar">
        <link rel="stylesheet" type="text/css" href="/assets/css/Nav.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/css/Projects.css" />


        <div className="navLogo">
            <Link to="/home" className="navLink">
                <img src="/assets/images/logo.png" className="logo"></img> {/* profile image */}
            </Link>
        </div>

        <div className="searchBar">
            <Search />
        </div>

        <div>
            <Link to="/home" className="navLink">Home</Link>
            <Link to="/profile" className="navLink">Profile</Link>

            <button onClick={handleLogout}>
                    Logout
                </button>
            {/* <Link to="/projects" className="navLink">Project</Link> */}
        </div>

    </nav>
  )
}

export {Nav}