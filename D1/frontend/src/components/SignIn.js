// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";

import { useState, useRef } from "react";




const SignIn = ({signUp}) => {

    // emailName 
    const [emailValue, setEmailValue] = useState("");
    
    const handleEmailOnBlur = (event) => {
        const value = event.target.value;
        setEmailValue(value); 
    
    };


    //password
    const [passwordValue, setPasswordValue] = useState("");          
          
    const handlePasswordOnBlur = (event) => {
        const value = event.target.value;
        setPasswordValue(value); 
          
    };


    const handleSubmit = async (e) => {
          e.preventDefault();

          const response = await fetch("/auth/signin", {
              method: "POST",
              headers: { "Content-Type": "application/json" },

              body: JSON.stringify({
                email: emailValue,
                password: passwordValue,
            }),
          });

            const data = await response.json();
            console.log("Signup response: ", data);

            // local storage the token
            localStorage.setItem("token", data.token);

            // to home page
            window.location.href = "/home";
        };

    return (
        <>
        <link rel="stylesheet" type="text/css" href="/assets/css/Projects.css"/>

            <h2>Welcome back! Sign in</h2>
            <div className="modal-overlay">
            <div className="modal-content">
                <h2>Sign In</h2>

                <form className="add-project-form" onSubmit={handleSubmit}>
                    <br/>

                    <label>Email:</label>
                    <input name="email" type="email" required onBlur={handleEmailOnBlur} /><br/>
                    <span></span>
                    <br/>

                    <label>Password:</label>
                    <input name="password" type="password" required  onBlur={handlePasswordOnBlur}/>
                    <span></span>
                    <br/>

                    <button type="submit">Sign In</button>
                </form>

                <p>Don't have an account?</p>
                <button className="otherOption" onClick={signUp}>Sign up</button>
              </div>
            </div>
        </>
  );
} 

export {SignIn}


