const express = require("express");

const { createUser, getUserByEmail } = require("../models/userModel");

const router = express.Router();


router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (!user || user.password !== password) {

    return res.status(401).json({
            success: false,
            message: "Invalid credentials" 
        });
    }

    res.json({
        success: true,
        message: "Signed in", 
        user 
    });
});

router.post("/register", async (req, res) => {
    
    const newUser = await createUser(req.body);

    res.json({ 
        success: true,
        message: "User registered",
        user: newUser 
    });
});

module.exports = router;
