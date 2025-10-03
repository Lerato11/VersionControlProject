const express = require("express");
const router = express.Router();

const { getFeeds } = require("../models/feedsModel");
const { getUserById } = require("../models/usersModel");
const { getProjectById } = require("../models/projectsModel");
const { getProjects } = require("../models/projectsModel"); // make sure you have a function to get all projects
const { getUsers } = require("../models/usersModel"); // function to get all users

// Search endpoint
router.get("/", async (req, res) => {
    const query = req.query.q?.toLowerCase() || "";
    if (!query) return res.json({ users: [], projects: [], feeds: [] });

    try {
        // --- Users ---
        const users = (await getUsers()).filter(u =>
            (u.firstName?.toLowerCase() || "").includes(query) ||
            (u.username?.toLowerCase() || "").includes(query) ||
            (u.email?.toLowerCase() || "").includes(query)
        );

        const projects = (await getProjects()).filter(p =>
            (p.name?.toLowerCase() || "").includes(query) ||
            (p.type?.toLowerCase() || "").includes(query)
        );


        // --- Feeds ---
        const feeds = (await getFeeds());
        const enrichedFeeds = await Promise.all(
            feeds.map(async feed => {
                const user = await getUserById(feed.user_id);
                const project = await getProjectById(feed.project_id);

                return {
                    ...feed,
                    userName: user?.username || "Unknown",
                    profilePic: user?.image || "/assets/images/default-user.jpg",
                    projectName: project?.name || "Unknown Project",
                    projectImage: project?.projectImage || "/assets/images/default-project.jpg",
                };
            })
        );

        const filteredFeeds = enrichedFeeds.filter(f => {
            const hashtags = f.hashtags || [];
            return (
                (f.message?.toLowerCase().includes(query)) ||
                (f.projectName?.toLowerCase().includes(query)) ||
                hashtags.some(tag => tag.toLowerCase().includes(query))
            );
        });


        res.json({
            users,
            projects,
            feeds: filteredFeeds
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
