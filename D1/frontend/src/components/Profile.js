import React from "react";
import { useState, useRef } from "react";

import ReactDOM from "react-dom/client";
import {Nav} from "../components/Nav";


const mockUserProfile = {
    id: 1,
    firstname: "lerato",
    lastname: "slime",
    username: "lerato_dev",
    email: "lerato.matsile@example.com",
    phoneNumber: "+27 82 123 4567",
    company: "CodeForge Solutions",
    profileImage: "https://example.com/profile.jpg", // replace with actual
    addressLine1: "123 Innovation Street",
    addressLine2: "Apartment 5B", // optional
    numberOfProjects: 7,
    numberOfFriends: 24
};


const Profile = () => {

  const [profile, setProfile] = useState(mockUserProfile);
  const [editMode, setEditMode] = useState("hidden");

  // refs for form fields
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const companyRef = useRef();
  const address1Ref = useRef();
  const address2Ref = useRef();

  const toggleEdit = () => {
    setEditMode(prev => (prev === "hidden" ? "visible" : "hidden"));
  };

  const saveProfile = (e) => {
    e.preventDefault();
    setProfile({
      ...profile,
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      company: companyRef.current.value,
      addressLine1: address1Ref.current.value,
      addressLine2: address2Ref.current.value,
    });
    setEditMode("hidden");
  };


  // form validations
    // first name validation
      const [firstNameValue, setFirstNameValue] = useState(mockUserProfile.firstname || "");
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
      const [lastNameValue, setLastNameValue] = useState(mockUserProfile.lastname || "");
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
        const [userNameValue, setuserNameValue] = useState(mockUserProfile.username || "");
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
        const [emailValue, setEmailValue] = useState(mockUserProfile.email || "");
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
    
              // address
              const [addressValue, setAddressValue] = useState(mockUserProfile.addressLine1 || "");
              const [addressMessage, setAddressMessage] = useState("");
          
              const handleAddressOnBlur = (event) => {
                  const value = event.target.value;
                  setAddressValue(value); 
          
                  if (value.length <= 1) {
                    setAddressMessage("Adress should be longer than 1 character.");
                  } else {
                    setAddressMessage("");
                  }
                };


            // button disable

            const validForm =
            (firstNameValue.length > 1 && !firstNameMessage) &&
            (lastNameValue.length > 1 && !lastNameMessage) &&
            (userNameValue.length > 2 && !userNameMessage) &&
            (emailValue.includes("@") && emailValue.includes(".") && !emailMessage) &&
            (addressValue.length > 1 && !addressMessage);

    return (
        <>
            <Nav />

            <div>
            
            <div>
                <img src={`${profile.profileImage}`}></img> {/* profile image */}
                <button onClick={toggleEdit}>
                    {editMode === "hidden" ? "Edit Profile" : "Cancel"}
                </button>
            </div>
            <div>
                <h3>{`${profile.firstname} ${profile.lastname}`}</h3>
                <div>
                    <p>Username: {`${profile.username}`}</p>
                    <p>Email: {`${profile.email}`}</p>
                    <p>Phone: {`${profile.phoneNumber}`}</p>
                    <p>Company: {`${profile.company}`}</p>
                </div>

                <div>
                    <p>Adress Line 1: {`${profile.addressLine1}`}</p>
                    <p>Adress Line 2: {`${profile.addressLine2}`}</p>
                    <p>Projects: {`${profile.numberOfProjects}`}</p>
                    <p>Friends: {`${profile.numberOfFriends}`}</p>
                </div>
            </div>


            
            </div>
                <form className={editMode} onSubmit={saveProfile}>
                    
                    <label htmlFor="name">First Name:</label><br/>
                    <input type="text" name="name" id="name" defaultValue={profile.firstname} ref={firstnameRef} onBlur={handleFirstNameOnBlur}/><br/>
                        <span id="nameMessage">{firstNameMessage}</span><br/>
                    <br/>
                    <label htmlFor="lastName">Last Name:</label><br/>
                    <input type="text" name="lastName" id="lastName" defaultValue={profile.lastname} ref={lastnameRef} onBlur={handleLastNameOnBlur}/><br/>
                        <span id="lastNameMessage">{lastNameMessage}</span><br/>
                        <br/>

                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" name="username" id="username" required="required" defaultValue={profile.username} ref={usernameRef} onBlur={handleuserNameOnBlur}/><br/>
                        <span id="userMessage">{userNameMessage}</span><br/>
                        <br/>

                    <label htmlFor="email">Email Address:</label><br/>
                    <input type="email" name="email" id="email" defaultValue={profile.email} ref={emailRef} onBlur={handleEmailOnBlur}/><br/>
                        <span id="emailMessage">{emailMessage}</span><br/>
                    <br/>
                            
                    <label>Company:</label><br/>
                    <input name="company" type="text" defaultValue={profile.company} ref={companyRef} /><br/>
                    <br/><br/>

                    <label>Address Line 1:</label><br/>
                    <input name="addressLine1" type="text" defaultValue={profile.addressLine1} ref={address1Ref} onBlur={handleAddressOnBlur} /><br/>
                        <span id="addressMessage">{addressMessage}</span>

                    <br/><br/>
                    <label>Address Line 2</label><br/>
                    <input name="addressLine2" type="text" defaultValue={profile.addressLine2} ref={address2Ref} /><br/>
                    <br/><br/>
                            
                        
                    <input type="submit" name="submit" value="Save Profile" disabled={!validForm} />
                </form>
        </>
    )


    // return (
    //     <>
    //         <div>
    //             <img src={`${mockUserProfile.profileImage}`}></img> {/* profile image */}
    //             <button>Add Friend</button>
    //         </div>
    //         <div>
    //             <p>Username: {`${mockUserProfile.username}`}</p>
    //             <p>Email: {`${mockUserProfile.email}`}</p>
    //             <p>Phone: {`${mockUserProfile.phoneNumber}`}</p>
    //             <p>Company: {`${mockUserProfile.company}`}</p>
    //         </div>

    //         <div>
    //             <p>Adress Line 1: {`${mockUserProfile.addressLine1}`}</p>
    //             <p>Adress Line 2: {`${mockUserProfile.addressLine2}`}</p>
    //             <p>Projects: {`${mockUserProfile.numberOfProjects}`}</p>
    //             <p>Friends: {`${mockUserProfile.numberOfFriends}`}</p>
    //         </div>
    //     </>
    // )
}

export { Profile }