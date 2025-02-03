require('dotenv').config(); // Load environment variables
const Profile = require('./src/models/Profile');
const mongoose = require('mongoose');

async function seedDatabase() {
  await mongoose.connect(process.env.MONGODB_URI);
  
  await Profile.deleteMany();

  const defaultProfile = {
    name: "Hesham Abdallah",
    greeting: "Hi, I'm",
    title: "Web Developer & UI/UX Enthusiast",
    introduction: "Passionate about creating elegant web solutions that combine beautiful design with powerful functionality. Fresh graduate ready to make an impact in the digital world.",
    ctaText: "See My Work",
    theme: {
        primaryColor: "#2563EB",
        backgroundColor: "#ffffff",
        textColor: "#1A1A1A"
    },
    hero: {
        greeting: "Hi, I'm",
        backgroundImage: {
            url: "http://localhost:5000/images/hero-bg.webp",
            opacity: 0.25,
            size: "cover",
            position: "center center"
        }
    },
    about: {
        title: "About Me",
        mainText: "As a fresh graduate in Computer Science, I've discovered my passion for web development during my academic journey. I love turning complex problems into simple, beautiful, and intuitive solutions.",
        secondaryText: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts.",
        imageUrl: "http://localhost:5000/images/profile.jpg"
    },
    socialLinks: {
        github: "https://github.com/HeshamAbdallah02",
        linkedin: "https://www.linkedin.com/in/hesham-abdalla-6531841ba",
        whatsapp: "https://wa.me/+201091655373",
        telegram: "https://t.me/HeshamAbdallah"
    },
        projects: {
        title: "Featured Projects",
        items: [
            {
                title: "Personal Portfolio",
                description: "A modern portfolio website built with MERN stack and fully customizable through a dashboard.",
                image: "http://localhost:5000/images/portfolio-project1.jpeg",
                technologies: ["React", "Node.js", "MongoDB", "Express"],
                liveLink: "https://yourportfolio.com",
                githubLink: "https://github.com/HeshamAbdallah02/portfolio-frontend"
            },
            {
                title: "E7GEZLY Web Dashboard",
                description: "A web based dashboard for PlayStations management that is synchronized with E7GEZLY mobile app.",
                image: "http://localhost:5000/images/project2.jpeg",
                technologies: [ "Node.js", "Firestore", "Firebase"],
                liveLink: "https://football-2b5b9.firebaseapp.com/register-login.html"
            },
            {
                title: "E7GEZLY App Backend",
                description: "Backend server for E7GEZLY app using node.js based on Firebase backend services and Firestore non relational database.",
                image: "http://localhost:5000/images/project3.webp",
                technologies: [ "Node.js", "Firestore", "Firebase"],
                liveLink: "https://play.google.com/store/apps/details?id=com.app.e7gezly"
            }
            // Add more projects here
        ]
    },
        footer: {
        navigation: ["home", "about", "skills", "projects", "contact"],
        copyrightText: "© {year} Hesham Abdallah. All rights reserved.",
        background: "#1A1A1A",
        textColor: "#FFFFFF",
        socialIcons: ["whatsapp", "linkedin", "telegram"],
        copyright: {
            textColor: "#888888",
            showYear: true
        }
    },
    skills: {
        title: "My Skills",
        categories: [
            {
                name: "Frontend",
                items: [
                    {
                        name: "HTML5",
                        icon: "fab fa-html5"
                    },
                    {
                        name: "CSS3",
                        icon: "fab fa-css3-alt"
                    },
                    {
                        name: "Bootstrap",
                        icon: "fa-brands fa-bootstrap"
                    },
                    {
                        name: "JavaScript",
                        icon: "fab fa-js"
                    },
                    {
                        name: "React.js",
                        icon: "fab fa-react"
                    }
                ]
            },
            {
                name: "Backend",
                items: [
                    {
                        name: "Node.js",
                        icon: "fab fa-node-js"
                    },
                    {
                        name: "Express.js",
                        icon: "fas fa-server"
                    },
                    {
                        name: "MongoDB",
                        icon: "fas fa-database"
                    },
                    {
                        name: ".NET Core",
                        icon: "fab fa-microsoft"
                    }
                ]
            },
            {
                name: "Development Tools",
                items: [
                    {
                        name: "Git",
                        icon: "fab fa-git-alt"
                    },
                    {
                        name: "Postman",
                        icon: "fas fa-paper-plane"
                    },
                    {
                        name: "VS Code",
                        icon: "fas fa-code"
                    },
                    {
                        name: "npm",
                        icon: "fab fa-npm"
                    },
                    {
                        name: "MongoDB Atlas",
                        icon: "fas fa-cloud"
                    },
                    {
                        name: "Firebase",
                        icon: "fas fa-fire"
                    }
                ]
            },
            {
                name: "Soft Skills",
                items: [
                    {
                        name: "Problem Solving",
                        icon: "fas fa-puzzle-piece"
                    },
                    {
                        name: "Team Collaboration",
                        icon: "fas fa-users"
                    },
                    {
                        name: "Communication",
                        icon: "fas fa-comments"
                    },
                    {
                        name: "Quick Learning",
                        icon: "fas fa-graduation-cap"
                    }
                ]
            }
        ]
    }
  };

  await Profile.create(defaultProfile);
  console.log("Database seeded!");
  process.exit();
}

seedDatabase();