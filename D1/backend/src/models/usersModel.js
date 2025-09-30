const { runFindQuery, runInsertQuery, runUpdateQuery, runDeleteQuery } = require("../database");


//  Read
// get all users 
async function getUsers() {
  const users = await runFindQuery("users");
  return users || null;
}


// get user by email
async function getUserByEmail(email) {
  const users = await runFindQuery("users", { email });
  return users[0] || null;
}


// get user friends
async function getUserFriends(id) {
    const user = await db.collection("users").findOne({ id });

    if (!user || !user.friends || user.friends.length === 0) {
        return []; 
    }

    // find user's friends
    const friends = await db.collection("users")
        .find({ id: { $in: user.friends } })
        .toArray();

    return friends;
}


// get user by id
async function getUserById(id) {
  const users = await runFindQuery("users", { id });
  return users[0] || null;
}


// Create
// Add a user
async function addUser(newUser) {
  return await runInsertQuery("users", newUser);
}


// Update 
// Edit a user profile 
async function updateUserProfile(id, updates) {
  return await runUpdateQuery("users", { id }, { $set: updates });
}


// send friend request
    // (param: id: id of user sending request)
    // add id to receiver's requests array

async function sendFriendRequest(senderId, receiverId) {
    return await runUpdateQuery(
        "users",
        { id: receiverId },

        // that user 
        { $addToSet: {
             requests: senderId 
            } } 
    );
}

// accept friend request
    // remove that id from requests, and add to friends array

async function acceptFriendRequest(receiverId, senderId) {
   // update the receiver

  await runUpdateQuery(
    "users",
    { id: receiverId }, // receiver

    // remove from request and add to friends
    {
       $pull: {
         requests: senderId 
        },
        $addToSet: {
             friends: senderId 
            }
      }
    );



    // sender id
    return await runUpdateQuery(
        "users",
        { id: senderId }, 
        { $addToSet: {
            
            friends: receiverId 
        } } 
    );



}

// reject friend request
    // remove that id from requests
async function rejectFriendRequest(receiverId, senderId) {
    return await runUpdateQuery(
    "users",
    { id: receiverId }, 
    { $pull: { requests: senderId } } 
  );
}


// add project 
async function addUserProject(userId, projectId) {
    return await runUpdateQuery(
        "users",
        { id: userId },

        // that user 
        { $addToSet: {
             projects: projectId 
            } } 
    );
}

// update profile image
async function updateUserImage(id, imagePath) {
    return await runUpdateQuery(
    "users",

    // change path of image
    { id },
    
    { $set: { image: imagePath } }
    );
}

// Delete
// remove a user ? admin?

async function removeUser(id) {
    return await runDeleteQuery("users", { id });
}


module.exports = {
    getUsers,
    getUserByEmail,
    getUserFriends,
    getUserById,
    addUser,
    updateUserProfile,
    sendFriendRequest,
    acceptFriendRequest, 
    rejectFriendRequest,
    addUserProject,
    updateUserImage, 
    removeUser
};