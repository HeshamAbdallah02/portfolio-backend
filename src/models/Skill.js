// src/models/Skill.js
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        min: 0,
        max: 100
    }
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);