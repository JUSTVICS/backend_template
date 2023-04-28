const express = require('express');
const router = express.Router();
const user = require('../models/user.model');

router.post("/User", async (req, res) => {
    try {
        const newUSer = (
        req.body.username,
        req.body.email,
        req.body.firstname);

    } catch (error) {
        throw new Error(`Error creating a user ${error.message}`)
    }
});

module.exports = router;