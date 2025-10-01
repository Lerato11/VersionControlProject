const express = require("express");

const { getFeeds,
    getFeedsByUserId, 
    addFeed,
    getNextFeedId,
    getFriendsFeed
} = require("../models/feedsModel");

const { getUserById } = require("../models/usersModel");

const router = express.Router();

//  Read
// get all feeds
router.get("/", async (req, res) => {

    try {
        const feeds = await getFeeds();
        res.json(feeds);

    } catch (err) {

        res.status(500).json({
             error: err.message 
        });
    }
});


// get feeds by project_id
// (get )
router.get("/local", async (req, res) => {
    try {
        const userId = parseInt(req.query.userId);  

        // if valid project
        if (isNaN(userId)) {

            return res.status(401).json({
                    success: false,
                    message: "Missing userId" 
                });
        }

        // console.log(use)

        const feeds = await getFriendsFeed(userId);

        res.json({ 
            success: true, 
            feeds 
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            error: err.message 
        });
    }
});

// Create
// Add a feed
// add project
router.post("/", async (req, res) => {

    const {message, user_id, project_id, type} = req.body;

    try{

        const newFeed = {
            id: await getNextFeedId(),
            message, 
            user_id, 
            project_id, 
            type
        };

        const createdFeed = await addFeed(newFeed);

        res.json({
            success: true,
            message: `Project successfully added`,
            createdFeed 

        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});





module.exports = router;
