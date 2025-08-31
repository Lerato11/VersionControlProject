import React from "react";

import ReactDOM from "react-dom/client";


const SignIn = ({signUp}) => {
    return (
        <>
            <h2>Welcome back! Sign in</h2>
            <form action="/signin" method="POST">
                <h2>Sign In</h2>

                <label>Email:</label>
                <input name="email" type="email" required />
                <br/>

                <label>Password:</label>
                <input name="password" type="password" required />
                <br/>

                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account?</p> <button onClick={signUp}>Sign up</button>
            
        </>
  );
} 

export {SignIn}