const { runFindQuery, runInsertQuery, runUpdateQuery } = require("../database");
const { getUserById } = require("../models/usersModel");

// Read

// get all feeds (global)
async function getFeeds() {
  const feeds = await runFindQuery("feeds");
  return feeds || null;
}



// get friend feeds (local)
async function getFeedsByUserId(userId) {
  const feeds = await runFindQuery("feeds", { userId });
  return feeds[0] || null;
}

// Create
// create a feed (on check in / out)
async function addFeed(newFeed) {
  return await runInsertQuery("feeds", newFeed);
}

async function getNextFeedId() {
    const lastFeed = await runFindQuery("feeds", {}, { sort: { id: -1 }, limit: 1 });
    return lastFeed.length ? lastFeed[0].id + 1 : 1;
}

async function getFriendsFeed(userId) {
    const user = await getUserById(userId);
    if (!user) return [];
    
    const friendsIds = user.friends || [];
    
    // get feeds where feed.userId is in friendsIds
    const feeds = await runFindQuery("feeds", { user_id: { $in: friendsIds } }, { sort: { id: -1 } });
    return feeds;
}

// Update and Delete a feed? 

module.exports = {
    getFeeds,
    getFeedsByUserId, 
    addFeed,
    getNextFeedId,
    getFriendsFeed
}