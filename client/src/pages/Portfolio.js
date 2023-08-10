import React from 'react';

function Portfolio() {
    return (
        <main>
            <h1 className="portfolio-title animated-h1">Project Portfolio</h1>

            <p className="indented-paragraph">
                {/* ... */}
            </p>
            <section className="projects">

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

                {/* ... Other project cards ... */}
            </section>
        </main>
    );
}

export default Portfolio;
