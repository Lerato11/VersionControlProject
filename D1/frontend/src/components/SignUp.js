// 6-u21769584

import React from "react";

import ReactDOM from "react-dom/client";

import { useState } from "react";


const SignUp = ({ signIn }) => {

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

    let hasNumber = /\d/.test(value); 
    let hasLetter = /[a-zA-Z]/.test(value); 
    let isLongEnough = value.length >= 8; 


    if (!hasNumber || !hasLetter || !isLongEnough) {
      setPasswordMessage("Password should contain at least one number, one letter and should at least be 8 characters long.");
      return true;

    } else {
      setPasswordMessage("");
      return false;
    }
  };


  const [confirmValue, setConfirmValue] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  const handleConfirmOnBlur = (event) => {
    const value = event.target.value;
    setConfirmValue(value);

    if (value != passwordValue) {
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

    try{
      const response = await fetch("/api/auth/register", {
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
          username: userNameValue,
          friends: [],
          projects: [],
          image: "",
          requests: []

        }),
      });

      const data = await response.json();
      console.log("Signup response: ", data);

      // local storage the token
      localStorage.setItem("userId", data.user.id);

      // to home page
      window.location.href = "/home";

    }catch(err){
      console.log(err);
    }
  };


  return (
    <>
      <link rel="stylesheet" type="text/css" href="/assets/css/Projects.css" />

      <h2>Welcome! Sign Up</h2>

      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Sign Up</h2>

          <form className="add-project-form" onSubmit={handleSubmit}>
            <br />

            <label htmlFor="name">First Name:</label><br />
            <input type="text" name="name" id="name" onBlur={handleFirstNameOnBlur} />
            <span id="nameMessage">{firstNameMessage}</span>
            <br />

            <label htmlFor="lastName">Last Name:</label><br />
            <input type="text" name="lastName" id="lastName" onBlur={handleLastNameOnBlur} />
            <span id="lastNameMessage">{lastNameMessage}</span>
            <br />

            <label htmlFor="username">Username:</label><br />
            <input type="text" name="username" id="username" required="required" onBlur={handleuserNameOnBlur} />
            <span id="userMessage">{userNameMessage}</span>
            <br />

            <label htmlFor="email">Email Address:</label><br />
            <input type="email" name="email" id="email" onBlur={handleEmailOnBlur} />
            <span id="emailMessage">{emailMessage}</span>
            <br />

            <label htmlFor="phone">Phone Number:</label><br />
            <input type="text" name="phone" id="phone" onBlur={handlePhoneOnBlur} />
            <span id="phoneMessage">{phoneMessage}</span>
            <br />

            <label>Company:</label><br />
            <input name="company" type="text" onBlur={handleCompanyOnBlur} />
            <span></span>
            <br />

            <label>Address Line 1:</label><br />
            <input name="addressLine1" type="text" onBlur={handleAddress1OnBlur} />
            <span id="addressMessage">{addressMessage}</span>
            <br />

            <label>Address Line 2 (optional):</label><br />
            <input name="addressLine2" type="text" onBlur={handleAdress2OnBlur} />
            <span></span>
            <br />

            <label htmlFor="password">Password:</label><br />
            <input type="password" name="password" id="password" required="required" onBlur={handlePasswordOnBlur} />
            <span id="passwordMessage">{passwordMessage}</span>
            <br />

            <label htmlFor="confirm">Confirm Password:</label><br />
            <input type="password" name="confirm_password" id="confirm" required="required" onBlur={handleConfirmOnBlur} />
            <span id="confirmMessage">{confirmMessage}</span>
            <br />

            <button type="submit">Sign Up</button>
            <button type="reset">Reset</button>
          </form>

          <p>Already have an account?</p>
          <button className="otherOption" onClick={signIn}>Sign In</button>
          
        </div>
      </div>
    </>
  );
}

export { SignUp }


