const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const profileRoutes = require('./src/routes/profile.routes');
const projectRoutes = require('./src/routes/project.routes');
const skillRoutes = require('./src/routes/skill.routes');
const uploadRoutes = require('./src/routes/upload.routes');
const contactRoutes = require('./src/routes/contact.routes');

const app = express();

// Middleware
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://heshamabdallah.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use('/images', express.static('public/images'));

// Routes
app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/contact', contactRoutes);

// Basic test route
app.get('/', (req, res) => {
    res.json({ message: 'Portfolio API is running' });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});