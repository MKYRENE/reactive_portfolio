// Import the About component
import About from './About'

// Define the Contact component
function Contact() {
    return (
        <main>
            {/* Include the About component */}
            <About />

            {/* Heading for Contact section */}
            <h1 style={{ color: 'white' }}>Contact Michael</h1>

            {/* Form for user to enter contact details */}
            <div>
                <form>
                    {/* Input fields */}
                    <input type="text" className="input-field" placeholder="Enter your name" />
                    <input type="email" className="input-field" placeholder="Enter your email address" />
                    <textarea className="input-field" cols="30" rows="10" placeholder="Enter your message"></textarea>
                    
                    {/* Submit button */}
                    <button>Submit</button>
                </form>
            </div>
        </main>
    )
}

// Export the Contact component
export default Contact;
