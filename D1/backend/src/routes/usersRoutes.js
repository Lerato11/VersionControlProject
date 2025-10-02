const express = require("express");

const { getUsers,
    getUserFriends,
    getUserById,
    updateUserProfile,
    sendFriendRequest,
    acceptFriendRequest, 
    rejectFriendRequest,
    addUserProject,
    updateUserImage, 
    removeUser,
    removeFriend
} = require("../models/usersModel");

const router = express.Router();


// get all users
router.get("/", async (req, res) => {

    try {
        const users = await getUsers(req.body);
        res.json(users);

    } catch (err) {
        res.status(500).json({
             error: err.message 
            });
    }



});


// get friends of user
router.get("/friends", async (req, res) => {
  const userId = parseInt(req.query.userId);

  try {

    // check if valid id
    const user = await getUserById(userId); // dont try for nothing

    if(!user || isNaN(userId)){
        return res.status(401).json({
                    success: false,
                    message: "Invalid or Missing userId" 
                });
    }
 
    const friends = await getUserFriends(userId);

    res.json({ 
            success: true, 
            friends 
        });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// get user by id
router.get("/:id", async (req, res) => {

    try{
        // get id from local storage
        const {id} = req.params; // for testing

        const user = await getUserById(Number(id));

        if (!user) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid Userssssss Id" 
                });
            }


        res.json({
            success: true,
            message: "Retrieved User successfully", 
            user 
        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});






// edit user
// update user
router.put("/", async (req, res) => {


    const {idNum,updates} = req.body;

    try{
        const user = await updateUserProfile(idNum, updates);

        if (!user || user.id != idNum) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid User Id" 
                });
            }

        res.json({
            success: true,
            message: "Profile Updated Successfully", 
            user 
        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});


router.get("/friendRequests/:id", async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const user = await getUserById(userId);
        if (!user) return res.status(401).json({ success: false, message: "Invalid User ID" });

        const requests = user.requests || [];
        res.json({ success: true, requests });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


// send friend request : 

router.post("/sendFriendReq/:id", async (req, res) => {

    const receiverId = parseInt(req.params.id);
    const {senderId} = req.body;


    try{
        const sender = await getUserById(senderId);
        const receiver = await getUserById(receiverId);

        // if valid user
        if (!sender) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid Sender id" 
                });
        } else if (!receiver){
            return res.status(401).json({
                    success: false,
                    message: "Invalid Receiver id" 
                });
        }


        // if user being added is already a friend
        if (sender.friends.includes(receiverId)) {

            return res.status(401).json({
                    success: false,
                    message: "User is already a friend" 
            });
        }

        const friendReq = await sendFriendRequest(senderId, receiverId);

        res.json({
            success: true,
            message: `Friend Request successfully sent to user ${receiverId} `, 
            friendReq 
        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});


router.post("/acceptFriendReq/:id", async (req, res) => {

    const acceptedId = parseInt(req.params.id);
    const {acceptingId} = req.body;

    try{
        const acceptingUser = await getUserById(acceptingId);
        const acceptedUser = await getUserById(acceptedId);

        // if valid user
        if (!acceptingUser) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid Accepting id" 
                });

        } else if (!acceptedUser){
            return res.status(401).json({
                    success: false,
                    message: "Invalid Accepted id" 
                });
        }
        
        // check if user had request from that id
        if (!acceptingUser.requests.includes(acceptedId)) {

            return res.status(401).json({
                    success: false,
                    message: "User did not send Friend Request" 
            });
        }

        // if user being added is already a friend
        if (acceptingUser.friends.includes(acceptedId)) {

            return res.status(401).json({
                    success: false,
                    message: "User is already a friend" 
            });
        }

        const acceptReq = await acceptFriendRequest(acceptingId, acceptedId);

        res.json({
            success: true,
            message: `User ${acceptedId} is now a Friend`, 
            acceptReq 
        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});

router.post("/removeFriend/:id", async (req, res) => {
    const removedId = parseInt(req.params.id);
    const { userId } = req.body;

    try {
        const removedUser = await getUserById(removedId);
        const user = await getUserById(userId);

        if (!user || !removedUser) {
            return res.status(401).json({ success: false, message: "Invalid user ID(s)" });
        }

        await removeFriend(userId, removedId);

        res.json({ success: true, message: "Friend removed successfully" });

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.post("/rejectFriendReq/:id", async (req, res) => {

    const rejectedId = parseInt(req.params.id);
    const {rejectingId} = req.body;


    try{
        const rejectingUser = await getUserById(rejectingId);

        // if valid user
        if (!rejectingUser) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid Rejecting id" 
                });

        } 
        
        // check if request was present 
        if (!rejectingUser.requests.includes(rejectedId)) {

            return res.status(401).json({
                    success: false,
                    message: "Usersss did not send Friend Request" 
            });
        }


        const acceptReq = await rejectFriendRequest(rejectingId, rejectedId);

        res.json({
            success: true,
            message: `User ${rejectedId}'s Friend Request was successfully rejected`, 
            acceptReq 
        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});



// update user image
router.put("/profileImage", async (req, res) => {

    const {idNum,image} = req.body;

    console.log("route: "+ image)


    try{
        const user = await updateUserImage(idNum, image);

        if (!user || user.id != idNum) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid User Id" 
                });
            }

        res.json({
            success: true,
            message: "Profile Image Updated Successfully", 
            user 
        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});



module.exports = router;