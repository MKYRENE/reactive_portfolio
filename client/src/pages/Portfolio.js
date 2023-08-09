function Portfolio() {
    return (
        <main>
            <h1>Welcome To My REACT Portfolio Site!</h1>
            <p>Introducing the Pomofocus App your ultimate productivity companion! As the developer behind this innovative tool, I created the Pomofocus App to help you harness the power of the Pomodoro Technique. Say goodbye to distractions and hello to focused work sessions. With Pomofocus, you can break your tasks into manageable intervals, boosting your efficiency and concentration. As a web developer, I combined my passion for coding with a drive for enhancing productivity to bring you this time-tested technique in a modern, user-friendly interface. Explore the Pomofocus App and supercharge your workflow!
            </p>
            <section className="projects">
                <h2>Featured Projects</h2>

                <div className="project-card">
                    <img
                        src="https://raw.githubusercontent.com/MKYRENE/pomo_focus/main/Assets/Page_ScreenShot.png"
                        alt="Pomofocus App"
                    />
                    <div className="project-info">
                        <h3>Pomofocus App</h3>
                        <p>
                            A productivity app that uses the Pomodoro Technique to help you manage
                            your time effectively and boost your focus.
                        </p>
                        <a
                            href="https://github.com/mkyrene/pomo_focus"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <img
                        src="https://your-image-url.com/travel-circle-screenshot.jpg"
                        alt="Travel Circle App"
                    />
                    <div className="project-info">
                        <h3>Travel Circle App</h3>
                        <p>
                            Plan your next adventure with the Travel Circle app. Discover exciting
                            destinations, create itineraries, and share your travel experiences.
                        </p>
                        <a
                            href="https://github.com/MKYRENE/travel_circle_app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Portfolio;