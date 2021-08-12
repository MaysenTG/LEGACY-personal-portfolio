import React, { useState } from 'react';
import FormModal from './Modal';
import '../index';

function ContactMe() {
  const [visible, setVisible] = useState(false);
    return (
      <>
        <main>
          <div className="heading-info" id="contact-info">
            <div className="main-text" id="contact-text">
              <h1>Get in touch!</h1>
            </div>
            <div className="contact-options">
              <div className="container">
                <form name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSfuRb0r1KOPwnuY3gdxVua4IwUHhNCjiSdUf9AD9FrUyQaicw/formResponse?" target="hidden_iframe" onSubmit={() => setVisible(true)}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="entry.946826032" placeholder="Your name.." required />
                  <label htmlFor="email">Email Address</label>
                  <input type="text" id="email" name="entry.1214101792" placeholder="Your email address.." required pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" />
                  <label htmlFor="subject">Message</label>
                  <textarea id="message" name="entry.1506473067" placeholder="Write something.." required defaultValue={""} />
                  <button id="submit-btn" type="submit" value="Submit">Submit</button>
                </form>
                <iframe title="block for contact us form" name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}} />
              </div>
            </div>
          </div>
          <FormModal show={visible} onHide={() => setVisible(false)} />
        </main>
      </>
    )
}


export default ContactMe;