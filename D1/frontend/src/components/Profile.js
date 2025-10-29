// 6-u21769584

import React from "react";
import { useState, useRef, useEffect } from "react";

import ReactDOM from "react-dom/client";
import { Nav } from "../components/Nav";

import { EmptyState } from "./EmptyState";



const mockUserProfile = {
    id: 1,
    firstname: "Tomoaki",
    lastname: "Nagao",
    username: "Nigo",
    email: "Tomoaki.Nagao@example.com",
    phoneNumber: "+27 82 123 4567",
    company: "BapeStar",
    profileImage: "/assets/images/member7.jpg", 
    addressLine1: "123 Innovation Street",
    addressLine2: "Apartment 5B", 
    numberOfProjects: 7,
    numberOfFriends: 24
};


const Profile = ({userId, onFriendStatusChange}) => {

    const [profile, setProfile] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const loggedInUserId = parseInt(localStorage.getItem("userId"));
    const [showRequestsModal, setShowRequestsModal] = useState(false);
    const [friendRequests, setFriendRequests] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);


    useEffect(() => {
        const fetchProfile = async () => {
            if (!userId) return;

            try {
                setLoading(true);
                const res = await fetch(`/api/users/${userId}`);
                const data = await res.json();

                if (!res.ok || !data.success) {
                    setError(data.message);
                    setProfile(null);

                    if (onFriendStatusChange) {
                        onFriendStatusChange(false, false);
                    }

                } else {
                    const fetchedProfile = data.user;
                    setProfile(fetchedProfile);

                    const currentUserId = parseInt(localStorage.getItem("userId"));
                    const isOwn = userId === currentUserId;

                    const isFriendStatus = fetchedProfile.friends?.includes(currentUserId); 

       
                    if (onFriendStatusChange) {
                        onFriendStatusChange(isFriendStatus, isOwn);
                    }

                    if (userId === loggedInUserId) {
                        const reqRes = await fetch(`/api/users/friendRequests/${userId}`);
                        const reqData = await reqRes.json();
                        if (reqRes.ok && reqData.success) {
                            setFriendRequests(reqData.requests); 
                        }
                    }

                }
            } catch (err) {
                setError("Network error, try again");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userId, onFriendStatusChange]);

    useEffect(() => {
        const fetchFriendRequests = async () => {
            if (userId !== loggedInUserId) return;

            try {
                const reqRes = await fetch(`/api/users/friendRequests/${userId}`);
                const reqData = await reqRes.json();
                if (reqRes.ok && reqData.success) {
                    // reqData.requests is an array of IDs
                    const users = await Promise.all(
                        reqData.requests.map(id =>
                            fetch(`/api/users/${id}`)
                                .then(res => res.json())
                                .then(d => d.user) // make sure your /api/users/:id returns { user: {...} }
                        )
                    );
                    setFriendRequests(users);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchFriendRequests();
    }, [userId]);



    const handleSendFriendReq = async () => {
        try {
            const res = await fetch(`/api/users/sendFriendReq/${profile.id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ senderId: loggedInUserId })
            });
            const data = await res.json();
            if (res.ok && data.success) alert("Friend request sent!");
            else alert(data.message);
        } catch (err) {
            console.error(err);
        }
    };


    const handleRemoveFriend = async () => {
        try {
            const res = await fetch(`/api/users/removeFriend/${profile.id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: loggedInUserId })
            });
            const data = await res.json();
            if (res.ok && data.success) alert("Friend removed!");
            else alert(data.message);
        } catch (err) {
            console.error(err);
        }
    };

    const toggleRequestsModal = () => {
        setShowRequestsModal(prev => !prev);
    };



    const handleAcceptRequest = async (senderId) => {
        try {
            const res = await fetch(`/api/users/acceptFriendReq/${senderId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ acceptingId: loggedInUserId })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                // remove accepted request from state
                setFriendRequests(prev => prev.filter(req => req.id !== senderId));
                alert(`You are now friends with user ${senderId}`);
            } else alert(data.message);
        } catch (err) {
            console.error(err);
        }
    };

    const handleRejectRequest = async (senderId) => {
        try {
            const res = await fetch(`/api/users/rejectFriendReq/${senderId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ rejectingId: loggedInUserId })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setFriendRequests(prev => prev.filter(req => req.id !== senderId));
                alert(`Friend request from user ${senderId} rejected`);
            } else alert(data.message);
        } catch (err) {
            console.error(err);
        }
    };


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
        setEditMode(prev => (prev === true ? false : true));
    };

    const saveProfile = async (e) => {
        e.preventDefault();

        const updates = {
            firstName: firstnameRef.current.value,
            lastName: lastnameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            company: companyRef.current.value,
            addressLine1: address1Ref.current.value,
            addressLine2: address2Ref.current.value,
            // phone: phoneRef.current.value
        };

        try {
            const res = await fetch("/api/users", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idNum: profile.id, updates })
            });

            const data = await res.json();


            if (!res.ok || !data.success) {
                setError(data.message);
                return;
            }

            
            setProfile(data.user);
            setEditMode(false);
        } catch (err) {
            setError("Network error while saving profile");
        }
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
            setAddressMessage("Address should be longer than 1 character.");
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


    if (loading) return <p>Loading profile...</p>;
    if (error) return <p>{error}</p>;
    if (!profile) return <p>No profile found.</p>;

    const isOwnProfile = userId === loggedInUserId;
    const isFriend = profile.friends?.includes(loggedInUserId);



    const handleImageUpload = async (e) => {
        e.preventDefault();

        if (!selectedImage) return alert("No image selected!");

        const formData = new FormData();
        formData.append("idNum", profile.id); // the key valu pairs in video
        formData.append("image", selectedImage);

        const res = await fetch("/api/users/profileImage", {
            method: "PATCH",
            body: formData,
        });

        console.log(formData);

        const data = await res.json();
        
        if (res.ok && data.success) {
            setProfile(data.user);
            setShowImageModal(false);

        } else {
            alert(data.message || "Upload failed");
        }
    };


    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Profile.css" />
            <link rel="stylesheet" type="text/css" href="/assets/css/Projects.css"/>

            <div className="ProfileCardDiv">

                <div className="ProfileImageDiv" onClick={() => setShowImageModal(true)}  style={{ cursor: "pointer" }}>
                    <img src={`${profile.image}`} ></img> {/* profile image */}
                    
                </div>

                {showImageModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h2>Upload Profile Image</h2>
                            <button className="Profile-close-btn" onClick={() => setShowImageModal(false)}>
                            &times;
                            </button>
                        </div>

                        <form onSubmit={handleImageUpload}>
                            <input 
                                    type="file" 
                                    id="choose-file"
                                    accept="image/*"
                                    onChange={(e) => setSelectedImage(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                                
                                <label htmlFor="choose-file" className="uploadButton">Choose File</label>
                                {selectedImage && (
                                    <span className="file-name">{selectedImage.name}</span>
                                )}

                                <br/>
                            <button type="submit">Upload</button>
                        </form>
                        </div>
                    </div>
                    )}

                <div className="userProfile">
                    <div className="ProjectsHeaders">
                        <h2>{`${profile.firstName} ${profile.lastName}`}</h2>

                        {isOwnProfile ? (
                            <>
                                <button onClick={toggleEdit}>Edit Profile</button>
                                <button
                                    onClick={toggleRequestsModal}
                                >
                                    Friend Requests ({friendRequests.length})
                                </button>
                            </>
                        ) : (
                            <>
                                {!isFriend ? (
                                    <button onClick={handleSendFriendReq}>
                                        Send Friend Request
                                    </button>
                                ) : (
                                    <button onClick={handleRemoveFriend}>Remove Friend</button>
                                )}
                            </>
                        )}
                    </div>

                    {isFriend || isOwnProfile ? (
                    <div className="ProfileMainDetails">
                        <div>
                            <p>Username: {`${profile.username}`}</p>
                            <p>Email: {`${profile.email}`}</p>
                            <p>Phone: {`${profile.phone}`}</p>
                            <p>Company: {`${profile.company}`}</p>
                        </div>

                        <div>
                            <p>Adress Line 1: {`${profile.address1}`}</p>
                            <p>Adress Line 2: {`${profile.address2}`}</p>
                            <p>Projects: {`${profile.projects.length}`}</p>
                            <p>Friends: {`${profile.friends.length}`}</p>
                        </div>
                    </div>

                    ) : (
                       
                        <EmptyState
                            title={`Send ${profile.firstName} a Friend Request to see their details.`}
                            // image="/assets/images/empty-feed.svg"
                         />
                    )}
                    
                        
                </div>



                    {editMode && (
                        <div className="modal-overlay">
                            <div className="modal-content">

                                <div className="modal-header">
                

                                    <div>
                                        <h2>Edit Profile</h2>
                                    </div>
                                    
                                    <div>
                                        <button className="Profile-close-btn" onClick={toggleEdit}>&times;</button>
                                    </div>

                                </div>
                                <form onSubmit={saveProfile} className="add-project-form">
                                    { 
                                        // <form className={editMode} onSubmit={saveProfile}>
                                        <div>
                                        <label htmlFor="name">First Name:</label><br />
                                        <input type="text" name="name" id="name" defaultValue={profile.firstname} ref={firstnameRef} onBlur={handleFirstNameOnBlur} /><br />
                                        <span id="nameMessage">{firstNameMessage}</span><br />
                                        <br />
                                        <label htmlFor="lastName">Last Name:</label><br />
                                        <input type="text" name="lastName" id="lastName" defaultValue={profile.lastname} ref={lastnameRef} onBlur={handleLastNameOnBlur} /><br />
                                        <span id="lastNameMessage">{lastNameMessage}</span><br />
                                        <br />

                                        <label htmlFor="username">Username:</label><br />
                                        <input type="text" name="username" id="username" required="required" defaultValue={profile.username} ref={usernameRef} onBlur={handleuserNameOnBlur} /><br />
                                        <span id="userMessage">{userNameMessage}</span><br />
                                        <br />

                                        <label htmlFor="email">Email Address:</label><br />
                                        <input type="email" name="email" id="email" defaultValue={profile.email} ref={emailRef} onBlur={handleEmailOnBlur} /><br />
                                        <span id="emailMessage">{emailMessage}</span><br />
                                        <br />

                                        <label>Company:</label><br />
                                        <input name="company" type="text" defaultValue={profile.company} ref={companyRef} /><br />
                                        <br /><br />

                                        <label>Address Line 1:</label><br />
                                        <input name="addressLine1" type="text" defaultValue={profile.addressLine1} ref={address1Ref} onBlur={handleAddressOnBlur} /><br />
                                        <span id="addressMessage">{addressMessage}</span>

                                        <br /><br />
                                        <label>Address Line 2</label><br />
                                        <input name="addressLine2" type="text" defaultValue={profile.addressLine2} ref={address2Ref} /><br />
                                        <br /><br />


                                        <button type="submit" disabled={!validForm}>Save</button>
                                        </div>
                                   
                                    }
                                </form>
                            </div>
                        </div>
                    )}

                    {showRequestsModal && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2>Friend Requests</h2>
                                    <button className="Profile-close-btn" onClick={toggleRequestsModal}>&times;</button>
                                </div>
                                <ul className="friend-requests-list">
                                    {friendRequests.length === 0 ? (
                                        <li>No pending requests</li>
                                    ) : (
                                        friendRequests.map((req, index) => (
                                            <li key={index} className="friend-request-item">
                                                <div>
                                                    <img src={req.image} alt="profile" className="profilePictureSmall" />
                                                    <span>{req.username}</span>
                                                </div>
                                                <div>
                                                    <button onClick={() => handleAcceptRequest(req.id)}>Accept</button>
                                                    <button onClick={() => handleRejectRequest(req.id)}>Reject</button>
                                                </div>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}

            </div>
            
        </>
    )

}

export { Profile }