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
async function getUserFriends(userId) {
    const user = await getUserById(userId);
    if (!user) return [];

    const friendIds = user.friends || [];

    if (friendIds.length === 0) return [];

    return await runFindQuery("users", { id: { $in: friendIds } });
}


// get user by id
async function getUserById(id) {
    const users = await runFindQuery("users", { id });
    return users[0] || null;
}


// Create
// Add a user
async function addUser(newUser) {

    const users = await runFindQuery("users");

    const maxId = users.reduce((max, user) => 
        user.id && user.id > max ? user.id : max, 0
    );

    newUser.id = maxId + 1;
    return await runInsertQuery("users", newUser);
}


// Update 
// Edit a user profile 
async function updateUserProfile(id, updates) {
    await runUpdateQuery("users", { id }, { $set: updates });
    return await getUserById(id);
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


async function removeFriend(removerId, removedId) {
    
    await runUpdateQuery(
        "users",
        { id: removerId },

        // that user 
        { $pull: {
             friends: removedId 
            } } 
    );
    
    return await runUpdateQuery(
        "users",
        { id: removedId },

        // that user 
        { $pull: {
             friends: removerId 
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

// add project 
async function removeUserProject(userId, projectId) {
    return await runUpdateQuery(
        "users",
        { id: userId },

        // that user 
        { $pull: {
             projects: projectId 
            } } 
    );
}

// update profile image
async function updateUserImage(idNum, imagePath) {
    console.log("backend: "+ imagePath);
    console.log("id: "+ idNum);
    
    await runUpdateQuery(
    "users",

    // change path of image
    { id: parseInt(idNum) },
    
    { $set: { image: imagePath } }
    );

    
    return await getUserById(idNum);
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
    removeUser,
    removeUserProject,
    removeFriend
};