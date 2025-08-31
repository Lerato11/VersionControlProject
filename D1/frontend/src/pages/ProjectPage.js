import React from "react";
import ReactDOM from "react-dom";

import {Projects} from "../components/Projects";
import {Feeds} from "../components/Feeds"
import {Profile} from "../components/Profile"
import { FeedDescr } from "../components/FeedDescr";
import {Nav} from "../components/Nav";

import { activityFeed } from "../components/Feeds";
import {IndivProject} from "../components/IndivProject"

import { useParams } from 'react-router-dom';
// import "../../../public/assets/css/"



const ProjectPage = () => {
    // var scopedFeed = scopedFeed= activityFeed.filter((activityFeed) => {
    //         return activityFeed.pr == scope;
    //       });

    let { id } = useParams();
    return (
       <>
        <link rel="stylesheet" type="text/css" href="/assets/css/ProjectPage.css"/>
        <div>
            <Nav />
        </div>

        <IndivProject id={2}/>,
        </>
    )
}

export {ProjectPage}