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
            window.location.href = "/";
        };

    return (
        <>
            <h2>Welcome back! Sign in</h2>
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>

                <label>Email:</label>
                <input name="email" type="email" required onBlur={handleEmailOnBlur} />
                <br/>

                <label>Password:</label>
                <input name="password" type="password" required  onBlur={handlePasswordOnBlur}/>
                <br/>

                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account?</p> <button onClick={signUp}>Sign up</button>
            
        </>
  );
} 

export {SignIn}


// import React, { useState } from "react";

// // Sign In Form
// const SignInForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     usernameOrEmail: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     // Reset
//     setFormData({ usernameOrEmail: "", password: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Sign In</h2>
//       <label>Username or Email:</label>
//       <input
//         type="text"
//         name="usernameOrEmail"
//         value={formData.usernameOrEmail}
//         onChange={handleChange}
//         required
//       />
//       <label>Password:</label>
//       <input
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Sign In</button>
//     </form>
//   );
// };

// // Sign Up Form
// const SignUpForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     company: "",
//     addressLine1: "",
//     addressLine2: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phoneNumber: "",
//       company: "",
//       addressLine1: "",
//       addressLine2: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Sign Up</h2>
//       <label>First Name:</label>
//       <input
//         type="text"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleChange}
//         required
//       />
//       <label>Last Name:</label>
//       <input
//         type="text"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleChange}
//         required
//       />
//       <label>Email:</label>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <label>Phone Number:</label>
//       <input
//         type="tel"
//         name="phoneNumber"
//         value={formData.phoneNumber}
//         onChange={handleChange}
//         required
//       />
//       <label>Company:</label>
//       <input
//         type="text"
//         name="company"
//         value={formData.company}
//         onChange={handleChange}
//         required
//       />
//       <label>Address Line 1:</label>
//       <input
//         type="text"
//         name="addressLine1"
//         value={formData.addressLine1}
//         onChange={handleChange}
//         required
//       />
//       <label>Address Line 2 (optional):</label>
//       <input
//         type="text"
//         name="addressLine2"
//         value={formData.addressLine2}
//         onChange={handleChange}
//       />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export { SignInForm, SignUpForm };
