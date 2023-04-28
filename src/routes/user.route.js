const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.post("/User", async (req, res) => {
    try {
        const newUSer = {
        username: req.body.username,
        firstname:  req.body.firstname,
       email: req.body.email,
    };
    const user = new User(newUSer);
    user.save();
    return res.status(201).json({
        success: true,
        user
    })

    } catch (error) {
        throw new Error(`Error creating a user ${error.message}`);
    }
});

module.exports = router;