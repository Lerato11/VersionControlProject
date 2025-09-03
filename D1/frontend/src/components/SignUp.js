// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";

import { useState } from "react";



const SignUp = ({signIn}) => {

  // first name validation
  const [firstNameValue, setFirstNameValue] = useState("");
  const [firstNameMessage, setFirstNameMessage] = useState("");

  const handleFirstNameOnBlur = (event) => {
      const value = event.target.value;
      setFirstNameValue(value); 

      if (value.length <= 1) {
        setFirstNameMessage("Name should be longer than 1 character.");
      } else {
        setFirstNameMessage("");
      }
    };
 

  // lastName 
  const [lastNameValue, setLastNameValue] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");

  const handleLastNameOnBlur = (event) => {
      const value = event.target.value;
      setLastNameValue(value); 

      if (value.length <= 1) {
        setLastNameMessage("Last Name should be longer than 1 character.");
      } else {
        setLastNameMessage("");
      }
    };


    // userName 
    const [userNameValue, setuserNameValue] = useState("");
    const [userNameMessage, setuserNameMessage] = useState("");

    const handleuserNameOnBlur = (event) => {
        const value = event.target.value;
        setuserNameValue(value); 

        if (value.length <= 2) {
          setuserNameMessage("User Name should be longer than 2 character.");
        } else {
          setuserNameMessage("");
        }
      };


      // emailName 
    const [emailValue, setEmailValue] = useState("");
    const [emailMessage, setEmailMessage] = useState("");

    const handleEmailOnBlur = (event) => {
        const value = event.target.value;
        setEmailValue(value); 

        if (!value.includes("@") || !value.includes(".")) {
          setEmailMessage("Email should include '@' and '.'.");
        } else {
          setEmailMessage("");
        }
      };


    // phoneNumber
    const [phoneValue, setPhoneValue] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("");

    const handlePhoneOnBlur = (event) => {
        const value = event.target.value;
        setPhoneValue(value); 

        if (value.length != 10) {
          setPhoneMessage("Phone number should be 10 digits long.");
        } else {
          setPhoneMessage("");
        }
      };


    // address
    const [address1Value, setAddressValue] = useState("");
    const [addressMessage, setAddressMessage] = useState("");

    const handleAddress1OnBlur = (event) => {
        const value = event.target.value;
        setAddressValue(value); 

        if (value.length <= 1) {
          setAddressMessage("Adress should be longer than 1 character.");
        } else {
          setAddressMessage("");
        }
      };

      // password
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");


    const handlePasswordOnBlur = (event) => {
      const value = event.target.value;
      setPasswordValue(value); 

      let hasNumber = /\d/.test(value); // has a number.
      let hasLetter = /[a-zA-Z]/.test(value); // has a letter.
      let isLongEnough = value.length >= 8; //  greater than 7 characters.

      
      if (!hasNumber || !hasLetter || !isLongEnough) {
        setPasswordMessage("Password should contain at least one number, one letter and should at least be 8 characters long.");
        return true;

      } else {
        setPasswordMessage("");
        return false;
       }
    };

      // confirm Password
    const [confirmValue, setConfirmValue] = useState("");
    const [confirmMessage, setConfirmMessage] = useState("");

    const handleConfirmOnBlur = (event) => {
        const value = event.target.value;
        setConfirmValue(value); 

        if (value != passwordValue) { // checking to see if the inputted Password value is equal to the inputted Confirm Password Value.
          setConfirmMessage("Password and Confirm Password do not match.");
        } else {
          setConfirmMessage("");
        }
      };


      const [companyValue, setCompanyValue] = useState("");
  
    const handleCompanyOnBlur = (event) => {
        const value = event.target.value;
        setCompanyValue(value); 
      };


    const [address2Value, setAdress2Value] = useState("");

    const handleAdress2OnBlur = (event) => {
        const value = event.target.value;
        setAdress2Value(value); 
      };

      // sign up button
      // const [formValidValue, setformValidValue] = useState("invalid");
      
      const validForm =
          (firstNameValue.length > 1 && !firstNameMessage) &&
          (lastNameValue.length > 1 && !lastNameMessage) &&
          (userNameValue.length > 2 && !userNameMessage) &&
          (emailValue.includes("@") && emailValue.includes(".") && !emailMessage) &&
          (phoneValue.length === 10 && !phoneMessage) &&
          (address1Value.length > 1 && !addressMessage) &&
          (passwordValue.length >= 8 && !passwordMessage) &&
          (confirmValue === passwordValue && !confirmMessage);

      const handleSubmit = async (e) => {
          e.preventDefault();

          const response = await fetch("/auth/signup", {
              method: "POST",
              headers: { "Content-Type": "application/json" },

              body: JSON.stringify({
                firstName: firstNameValue,
                lastName: lastNameValue,
                email: emailValue,
                phoneNumber: phoneValue,
                company: companyValue,
                addressLine1: address1Value,
                addressLine2: address2Value,
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
      <h2>Welcome! Sign Up</h2>

      <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
      
          <label htmlFor="name">First Name:</label><br/>
          <input type="text" name="name" id="name" onBlur={handleFirstNameOnBlur}/><br/>
            <span id="nameMessage">{firstNameMessage}</span><br/>
          <br/>
          <label htmlFor="lastName">Last Name:</label><br/>
          <input type="text" name="lastName" id="lastName" onBlur={handleLastNameOnBlur}/><br/>
            <span id="lastNameMessage">{lastNameMessage}</span><br/>
            <br/>

          <label htmlFor="username">Username:</label><br/>
          <input type="text" name="username" id="username" required="required" onBlur={handleuserNameOnBlur}/><br/>
            <span id="userMessage">{userNameMessage}</span><br/>
            <br/>

          <label htmlFor="email">Email Address:</label><br/>
          <input type="email" name="email" id="email" onBlur={handleEmailOnBlur}/><br/>
            <span id="emailMessage">{emailMessage}</span><br/>
          <br/>
          <label htmlFor="phone">Phone Number:</label><br/>
          <input type="text" name="phone" id="phone" onBlur={handlePhoneOnBlur}/><br/>
            <span id="phoneMessage">{phoneMessage}</span><br/>
          <br/>
          <label>Company:</label><br/>
          <input name="company" type="text" onBlur={handleCompanyOnBlur} /><br/>
          <br/><br/>

          <label>Address Line 1:</label><br/>
          <input name="addressLine1" type="text" onBlur={handleAddress1OnBlur} /><br/>
            <span id="addressMessage">{addressMessage}</span>

          <br/><br/>
          <label>Address Line 2 (optional):</label><br/>
          <input name="addressLine2" type="text" onBlur={handleAdress2OnBlur} /><br/>
          <br/><br/>

          <label htmlFor="password">Password:</label><br/>
          <input type="password" name="password" id="password" required="required" onBlur={handlePasswordOnBlur}/><br/>
            <span id="passwordMessage">{passwordMessage}</span><br/>
          <br/>
          <label htmlFor="confirm">Confirm Password:</label><br/>
          <input type="password" name="confirm_password" id="confirm" required="required" onBlur={handleConfirmOnBlur}/><br/>
            <span id="confirmMessage">{confirmMessage}</span>
          <br/>
          <input type="submit" name="submit" value="Submit" disabled={!validForm} />
          <input type="reset" name="reset" value="Reset"/>
      </form>

      <p>Have an account already?</p> <button onClick={signIn}>Sign In</button>
    </>
);
} 

export {SignUp}












// import React, { useState } from "react";

// // Sign In htmlForm
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

// // Sign Up htmlForm
// const SignUpForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
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
//       phone: "",
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
//         name="phone"
//         value={formData.phone}
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
