// 6-u21769584

import React from "react";
import ReactDOM from "react-dom";

import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

import { useState } from "react";


const SplashWelcome = () => {

    const [content, setContent] = useState("welcome");

    const signUp = () =>{
        setContent("signUp");
    }

    const signIn = () =>{
        setContent("signIn");
    }

    const closeModal = () => {
        setContent("welcome");
    } 
    


    // if (content == "welcome"){
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Splash.css"/>

            <div className="splash-logo">
                <img src="/assets/images/logo.png" alt="Logo" />
            </div>

            <div className="backGround">
                <div className="welcome-text">
                    <h1>Version Control and Collaboration made  to be a <b>BREEZE</b></h1>

                    <p>A simple Version Control Website focused on code that allows users to share and update files in shared
                        projects, view other projects, add friends, collaborate <b>AND MORE</b>.</p>

                    <div>
                        <button className="splashSignIn" onClick={signIn}>Sign In</button>
                        <button className="splashSignUp" onClick={signUp}>Sign Up</button>
                    </div>
                    
                </div>

                <div className="welcome-image">
                    <img src="/assets/images/splashImage.jpg" alt="Welcome" />
                </div>
            </div>


            {content === "signUp" && (
                <div className="modal-overlay">
                    <SignUp signIn={signIn} onCancel={closeModal} />
                </div>
            )}

            {content === "signIn" && (
                <div className="modal-overlay">
                    <SignIn signUp={signUp} onCancel={closeModal} />
                </div>
            )}
            
            <div className="carousel">
                <div className="carousel-track">
                    <img src="/assets/images/amazon.png" alt="carousel1" />
                    <img src="/assets/images/X-Logo.png" alt="carousel2" />
                    <img src="/assets/images/tesla.png" alt="carousel3" />
                    <img src="/assets/images/microsoft.png" alt="carousel4" />
                    <img src="/assets/images/google.png" alt="carousel5" />

                    <img src="/assets/images/amazon.png" alt="carousel1" />
                    <img src="/assets/images/X-Logo.png" alt="carousel2" />
                    <img src="/assets/images/tesla.png" alt="carousel3" />
                    <img src="/assets/images/microsoft.png" alt="carousel4" />
                    <img src="/assets/images/google.png" alt="carousel5" />
                </div>
            </div>
        </>
    ); 
}

export {SplashWelcome}