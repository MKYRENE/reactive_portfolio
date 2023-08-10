import About from './About'

function Contact() {
    return (


        <main>
            <About />
            <h1>Contact Michael</h1>
            <div>
                <form>
                    <input type="text" className="input-field" placeholder="Enter your name" />
                    <input type="email" className="input-field" placeholder="Enter your email address" />
                    <textarea className="input-field" cols="30" rows="10" placeholder="Enter your message"></textarea>
                    <button>Submit</button>
                </form>
            </div>

        </main>
    )
}




export default Contact;