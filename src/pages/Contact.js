import React from 'react';


function EmailForm() {
    // Email me submission form

    return (
        <div>
            <h3>Email Me</h3>
            <form action="https://formsubmit.co/jessicajdea@gmail.com" method="POST">
                {/* Name input */}
                <input type="text" name="name" placeholder="Name" id='name' required></input>
                <br />

                {/* Email input */}
                <input type="email" name="email" placeholder="Email Address" id='email' required></input>
                <br />

                {/* Email subject line */}
                <input type="hidden" name="_subject" value="New submission"></input>

                {/* Email content */}
                <textarea row="5" col="6" name="name" placeholder="Write your message here..." id='email-message' required></textarea>

                {/* Send user to thanks page after submission */}
                <input type="hidden" name="_next" value="https://jrdjessica.github.io/portfolio/#/thanks"></input>
                <div>
                    <button type="submit" id="send-btn">Submit</button>
                </div>
            </form>
        </div>
    )
}


function Button(props) {
    // Buttons to links (linkedin, github)

    function VisitLink(link) {
        // Opens new tab to link when button is clicked
        window.open(
            link, "_blank")
    }

    return (
        <div className="button">
            <button className="contact-link" id="contact-link" onClick={() => VisitLink(props.link)}>
                {props.message === 'Github' && <i className="bi-github" role="img" aria-label="GitHub"></i>}
                {props.message === 'LinkedIn' && <i className="bi bi-linkedin"></i>}
            </button>
        </div>
    )
}


function DashboardContainer() {
    // Return dashboard

    return (
        <div>
            <h1>Contact Me</h1>
            <div>
                <EmailForm />
            </div>
            <br />
            <div>
                <h3>Links</h3>
                <Button message={'LinkedIn'} link={'https://www.linkedin.com/in/jessica-dea/'} />
                <Button message={'Github'} link={'https://github.com/jrdjessica'} />
            </div>
        </div>
    )
}


function Contact() {
    return (
        <div class="contact">
            <div class="contact-color">
                <div class="contact-content" id="contact">
                    <DashboardContainer />
                </div>
            </div>
        </div>
    );
}

export default Contact;