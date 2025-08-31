import React from "react";
import { useState, useRef } from "react";

import ReactDOM from "react-dom/client";
import {Nav} from "../components/Nav";


const mockUserProfile = {
    id: 1,
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
      username: usernameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneRef.current.value,
      company: companyRef.current.value,
      addressLine1: address1Ref.current.value,
      addressLine2: address2Ref.current.value,
    });
    setEditMode("hidden");
  };

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
            <form className={editMode} onSubmit={saveProfile}>
                <label>Username:</label>
                <input defaultValue={profile.username} ref={usernameRef} />
                <label>Email:</label>
                <input defaultValue={profile.email} ref={emailRef} />
                <label>Phone:</label>
                <input defaultValue={profile.phoneNumber} ref={phoneRef} />
                <label>Company:</label>
                <input defaultValue={profile.company} ref={companyRef} />
                <label>Address Line 1:</label>
                <input defaultValue={profile.addressLine1} ref={address1Ref} />
                <label>Address Line 2:</label>
                <input defaultValue={profile.addressLine2} ref={address2Ref} />
                <button type="submit">Save Profile</button>
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