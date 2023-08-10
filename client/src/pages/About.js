import React from 'react';
import ProfilePic from "../assets/1647801593361.jpg"; // Update the path to your image

function About() {
    return (
        <div className="about-container">
            <div className="background-overlay"></div> {/* Add this */}
            <h1 style={{ color: 'white' }}>About Me</h1>
            <img src={ProfilePic} alt="Profile" className="profile-image" />
            <p className="indented-paragraph">
            Passionate and results-driven professional with a background in retail banking and a strong desire to transition into software development. Recently completed an intensive Full Stack Web Development Bootcamp at Rutgers University, mastering key topics such as Computer Science applied to JavaScript, Algorithms, Data Structures, and Responsive Design. Proficient in front-end and back-end technologies, including React.js, Node.js, and Express.js. Committed to delivering seamless user experiences and driving business growth through innovative web solutions.
            </p>
        </div>
    )
}

export default About;
