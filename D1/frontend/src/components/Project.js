// 6-u21769584

import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

import {ProjectDetails} from "./ProjectDetails"
import {ProjectHeader} from "./ProjectHeader"


const Project = ({project}) => {
    return (

        <Link to="/projects" className="projectLink">
            <li>
                <link rel="stylesheet" type="text/css" href="/assets/css/Project.css"/>
                
                <div className="projectContainer">
                    < ProjectHeader projectImg={project.image} languages={project.languages} />
                    < ProjectDetails projectName={project.name} projectType={project.type} projectVersion={project.version}  projectStatus={project.state}  projectDescr={project.description}/>
                </div>
            </li>
        </Link>
    )
}



export { Project }