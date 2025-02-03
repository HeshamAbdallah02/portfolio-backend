// backend/models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    greeting: {
        type: String,
        default: "Hi, I'm"
    },
    title: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    ctaText: {
        type: String,
        default: "See My Work"
    },
    socialLinks: {
        github: String,
        linkedin: String,
        whatsapp: String,  // Added
        telegram: String   // Added
    },
    // Hero section customization
    hero: {
        greeting: {
            type: String,
            default: "Hi, I'm"
        },
        backgroundImage: {
            url: {
                type: String,
                default: "" // Empty string for no background image
            },
            opacity: {
                type: Number,
                min: 0,
                max: 1,
                default: 0.1
            },
            size: {
                type: String,
                enum: ['cover', 'contain', 'auto'],
                default: 'cover'
            },
            position: {
                type: String,
                default: 'center center'
            }
        }
    },
    // About section customization
    about: {
        title: {
            type: String,
            default: "About Me"
        },
        mainText: {
            type: String,
            required: true
        },
        secondaryText: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        }
    },
    skills: {
        title: {
            type: String,
            default: "My Skills"
        },
        categories: [{
            name: {
                type: String,
                required: true
            },
            items: [{
                name: {
                    type: String,
                    required: true
                },
                icon: {
                    type: String,
                    required: true
                }
            }]
        }]
    },
    // Add this to your profileSchema
    projects: {
        title: {
            type: String,
            default: "Featured Projects"
        },
        items: [{
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            technologies: [{
                type: String
            }],
            liveLink: String,
            githubLink: String
        }]
    },
    contact: {
        title: {
            type: String,
            default: "Get In Touch"
        },
        description: {
            type: String,
            default: "Feel free to reach out via the form below."
        },
        fields: [{
            name: {
                type: String,
                required: true
            },
            type: {
                type: String,
                enum: ['text', 'email', 'textarea'],
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            required: {
                type: Boolean,
                default: true
            }
        }],
        buttonText: {
            type: String,
            default: "Send Message"
        },
        successMessage: {
            type: String,
            default: "Your message has been sent successfully!"
        },
        errorMessage: {
            type: String,
            default: "Something went wrong. Please try again."
        }
    },
    footer: {
        navigation: [{
            type: String,
            enum: ['home', 'about', 'skills', 'projects', 'contact'],
            default: ['home', 'about', 'skills', 'projects', 'contact']
        }],
        copyrightText: {
            type: String,
            default: "© {year} {name}. All rights reserved."
        },
        background: {
            type: String,
            default: "#1A1A1A"
        },
        textColor: {
            type: String,
            default: "#FFFFFF"
        },
        socialIcons: {
            type: [String],
            enum: ['whatsapp', 'linkedin', 'telegram', 'github'],
            default: ['whatsapp', 'linkedin', 'telegram']
        },
        copyright: {
            textColor: {
                type: String,
                default: "#888888"
            },
            showYear: {
                type: Boolean,
                default: true
            }
        }
    },
    // Theme customization
    theme: {
        primaryColor: {
            type: String,
            default: "#2563EB"
        },
        backgroundColor: {
            type: String,
            default: "#ffffff"
        },
        textColor: {
            type: String,
            default: "#1A1A1A"
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);