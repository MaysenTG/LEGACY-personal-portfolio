function ContactMe() {
    return (
        <main>
          <div className="heading-info" id="contact-info">
            <div className="main-text" id="contact-text">
              <h1>Get in touch!</h1>
            </div>
            <div className="contact-options">
              <div className="container">
                <form name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSfuRb0r1KOPwnuY3gdxVua4IwUHhNCjiSdUf9AD9FrUyQaicw/formResponse?" target="hidden_iframe">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="entry.946826032" placeholder="Your name.." required />
                  <label htmlFor="email">Email Address</label>
                  <input type="text" id="email" name="entry.1214101792" placeholder="Your email address.." required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                  <label htmlFor="subject">Message</label>
                  <textarea id="message" name="entry.1506473067" placeholder="Write something.." required defaultValue={""} />
                  <button id="submit-btn" type="submit" value="Submit">Submit</button>
                </form>
                <iframe title="block for contact us form" name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}} />
                {/* Popup after form submission */}
                <div id="myModal" className="modal">
                  {/* Modal content */}
                  <div className="modal-content">
                    <span className="close">×</span>
                    <h2>Contact us form submitted</h2>
                    <br />
                    <br />
                    <p>Thanks for sending me a message!</p>
                    <br />
                    <p>I'll get in touch with you ASAP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    )
}


export default ContactMe;