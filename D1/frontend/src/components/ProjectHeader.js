import React from "react";

import ReactDOM from "react-dom/client";


const ProjectHeader = ({projectImg, languages}) => {
    return (
        <>
            <img src={`${projectImg}`}></img> {/* project image */}
            <div>
                <ul>
                    <h5>Project Languages</h5>
                    {languages.map((language) => {
                        return <li>{`${language}`}</li>
                    })}
                </ul>
            </div>
        </>
    )
}

export { ProjectHeader }