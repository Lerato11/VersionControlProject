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

    


    if (content == "welcome"){
        return (
        <>
            <div>
                <div>
                    <h1>Version Control and Collaboration made  to be a <b>BREEZE</b></h1>

                    <p>A simple Version Control Website focused on code that allows users to share and update files in shared
                        projects, view other projects, add friends, collaborate <b>AND MORE</b>.</p>

                        <div>
                            <button onClick={signIn}>Sign In</button>
                            <button onClick={signUp}>Sign Up</button>
                        </div>
                </div>

                <div>
                    <img src="" />
                </div>
            </div>


            {/* <div>
                <SignIn />
                <SignUp />
            </div> */}

            <div>
                {/* carosel */}
            </div>
        </>
    )
    } else if (content == "signUp"){
        return (
            <>

                <div> 
                    {/* <SignIn /> */}
                    <SignUp signIn={signIn}/>
                </div> 
            </>
        ) 
    } else if (content == "signIn"){
        return (
            <>

                <div> 
                    {/* <SignIn /> */}
                    <SignIn signUp={signUp}/>
                </div> 
            </>
        )
    }

    
}

export {SplashWelcome}