// 6-u21769584
import React from "react";
import ReactDOM from "react-dom";

const EmptyState = ({ title, message, image }) => {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/EmptyState.css"/>

            <div className="empty-state">
                {image && <img src={image} alt={title} className="empty-state-img" />}
                <h2>{title}</h2>
                <p>{message}</p>
            </div>
        </>
    );
};


export {EmptyState}
