const { runFindQuery, runInsertQuery, runUpdateQuery } = require("../database");


// Read

// get all feeds (global)
async function getUsers() {
  const users = await runFindQuery("users");
  return users || null;
}



// get friend feeds (local)
async function getFeedsByUserId(userId) {
  const users = await runFindQuery("users", { userId });
  return users[0] || null;
}

// Create
// create a feed (on check in / out)
async function addFeed(newFeed) {
  return await runInsertQuery("feeds", newFeed);
}

// Update and Delete a feed? 


module.exports = {
    getUsers,
    getFeedsByUserId, 
    addFeed
}