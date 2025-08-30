import React from "react";
import ReactDOM from "react-dom/client";

import PropTypes from 'prop-types';

import {ProjectDetails} from "./ProjectDetails"
import {ProjectHeader} from "./ProjectHeader"

const Project = ({project}) => {
    return (
        <li>
            < ProjectHeader projectImg={project.image} languages={project.languages} />
            < ProjectDetails projectName={project.name} projectType={project.type} projectVersion={project.version}  projectStatus={project.status}  projectDescr={project.description}/>
        </li>
    )
}


Project.propTypes = {
    project: PropTypes.object
}

export { Project }