const express = require("express");

const { getFeeds,
    getFeedsByUserId, 
    addFeed,
    getNextFeedId,
    getFriendsFeed
} = require("../models/feedsModel");

const { getUserById } = require("../models/usersModel");
const { getProjectById } = require("../models/projectsModel");

const router = express.Router();

//  Read
// get all feeds
router.get("/", async (req, res) => {

    try {
        const feeds = await getFeeds();

        const enrichedFeeds = await Promise.all(
            feeds.map(async (feed) => {
                const user = await getUserById(feed.user_id);
                const project = await getProjectById(feed.project_id);

                return {
                    ...feed,
                    userName: user?.username || "Unknown",
                    profilePic: user?.image || "/assets/images/default-user.jpg",
                    profileImage: project?.projectImage || "/assets/images/default-project.jpg"
                };
            })
        );

        res.json(enrichedFeeds);

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
                    message: "Missing or invalid userId" 
                });
        }

        // console.log(use)

        const feeds = await getFriendsFeed(userId);

        const enrichedFeeds = await Promise.all(
            feeds.map(async (feed) => {
                const user = await getUserById(feed.user_id);
                const project = await getProjectById(feed.project_id);

                return {
                    ...feed,
                    userName: user?.username || "Unknown",
                    profilePic: user?.image || "/assets/images/default-user.jpg",
                    profileImage: project?.projectImage || "/assets/images/default-project.jpg"
                };
            })
        );
        

        res.json({ 
            success: true, 
            enrichedFeeds 
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
            type,
            createdAt: new Date()
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
