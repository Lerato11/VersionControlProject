// 6-u21769584

import React from "react";
import ReactDOM from "react-dom/client";
import { useParams } from 'react-router-dom';

import { Search } from "./Search";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
    let { id } = useParams();
    
  return (
    <nav className="navBar">
        <link rel="stylesheet" type="text/css" href="/assets/css/Nav.css"/>
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
            {/* <Link to="/projects" className="navLink">Project</Link> */}
        </div>

    </nav>
  )
}

export {Nav}