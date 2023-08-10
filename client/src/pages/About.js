import React from 'react';
import ProfilePic from "../assets/1647801593361.jpg"; // Update the path to your image
import LinkedInLogo from "../assets/LinkedInLogo.png"; // Update the path to your LinkedIn logo image

function About() {
    return (
        <div className="about-container">
            {/* Add a background overlay */}
            <div className="background-overlay"></div>

            {/* Page title */}
            <h1 className="portfolio-title" style={{ color: 'white' }}>About Me</h1>

            {/* Profile picture */}
            <img src={ProfilePic} alt="Profile" className="profile-image" />

            {/* Introduction */}
            <p className="indented-paragraph">
                {/* Your introduction text */}
                Passionate and results-driven professional with a background in retail banking and a strong desire to transition into software development. Recently completed an intensive Full Stack Web Development Bootcamp at Rutgers University, mastering key topics such as Computer Science applied to JavaScript, Algorithms, Data Structures, and Responsive Design. Proficient in front-end and back-end technologies, including React.js, Node.js, and Express.js. Committed to delivering seamless user experiences and driving business growth through innovative web solutions.

                {/* Center-aligned LinkedIn button */}
                <nav className="align-center">
                    <button>
                        Follow Me
                        <a href="https://www.linkedin.com/in/rodriguezm90" target="_blank" rel="noopener noreferrer">
                            {/* LinkedIn logo */}
                            <img src={LinkedInLogo} alt="LinkedIn Profile" className="linkedin-logo" />
                        </a>
                    </button>
                </nav>
            </p>
        </div>
    );
}

export default About;
