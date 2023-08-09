function Main() {
        return (
            <main>
              <section className="main-intro">
                <h1>Welcome to My React Portfolio!</h1>
                <p>
                  Hi, I'm Michael Rodriguez, a passionate web developer. I love building
                  innovative and user-friendly web applications. Explore my projects below!
                </p>
              </section>
        
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
          );
        }
        
        export default Main;