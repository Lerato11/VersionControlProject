
import React from "react";
import ReactDOM from "react-dom/client";
import { useParams } from 'react-router-dom';

import { Search } from "./Search";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
    let { id } = useParams();
    
  return (
    <nav className="navBar">
        <div className="navLogo">
            <img src={`----LOGO ---- `}></img> {/* profile image */}
        </div>

        <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/projects">Project</Link>
        </div>

        <div>
            <Search />
        </div>

    </nav>
  )
}

export {Nav}