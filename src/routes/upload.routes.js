// src/routes/upload.routes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/');
    },
    filename: function(req, file, cb) {
        // Create unique filename with original extension
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload an image.'), false);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

// Upload route
router.post('/', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Please upload a file' });
        }
        
        const imageUrl = `/images/${req.file.filename}`;
        res.status(200).json({ 
            message: 'File uploaded successfully',
            url: imageUrl
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error uploading file',
            error: error.message
        });
    }
});

module.exports = router;