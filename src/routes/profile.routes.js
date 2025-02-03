// src/routes/profile.routes.js
const router = require('express').Router();
const Profile = require('../models/Profile');

// Get profile
router.get('/', async (req, res) => {
    try {
        const profile = await Profile.findOne();
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update profile
router.put('/', async (req, res) => {
    try {
        const profile = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;