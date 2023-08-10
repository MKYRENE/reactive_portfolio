// Import the travel image from the assets folder
import travel from '../assets/travel.jpg';
import React from 'react';

function Portfolio() {
    return (
        <main>
            {/* Portfolio Title */}
            <h1 className="portfolio-title animated-h1">Project Portfolio</h1>

            {/* Placeholder for other content */}
            <p className="indented-paragraph">
                {/* ... */}
            </p>

            {/* Projects Section */}
            <section className="projects">
                {/* Pomofocus Project */}
                <div className="project-card">
                    <div className="image-container">
                        <img
                            className="project-image smaller-image"
                            src="https://raw.githubusercontent.com/MKYRENE/pomo_focus/main/Assets/Page_ScreenShot.png"
                            alt="Pomofocus App"
                        />
                    </div>
                    <div className="project-info">
                        <p className="project-description">
                            {/* ... */}
                        </p>
                        <div className="button-container">
                            <a
                                className="github-button"
                                href="https://github.com/mkyrene/pomo_focus"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>

                {/* Travel Circle Project */}
                <div className="project-card">
                    <div className="image-container">
                        <img
                            className="project-image smaller-image"
                            src={travel} // Importing travel variable for image source
                            alt="Travel Circle App"
                        />
                    </div>
                    <div className="project-info">
                        <h3 className="project-title">Travel Circle App</h3>
                        <p className="project-description">
                            {/* ... */}
                        </p>
                        <div className="button-container">
                        <a
                                className="github-button"
                                href="https://github.com/MKYRENE/travel_circle_app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>

                {/* ... Other project cards ... */}
            </section>
        </main>
    );
}

export default Portfolio;
