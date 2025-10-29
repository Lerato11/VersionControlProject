// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";

import { useEffect } from "react";

const PopupMessage = ({ message, type = "success", onClose }) => {
    useEffect(() => {

        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        
        return () => clearTimeout(timer);

    }, [onClose]);


    return (
        <div
            className={`popup-message ${type}`}
            style={{

                backgroundColor: type === "error" ? "#930f00ff" : "#00b049ff",

            }}
                >
            {message}

        </div>
    );
};

export {PopupMessage}