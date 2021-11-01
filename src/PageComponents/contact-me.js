import React, { useState } from 'react';
import FormModal from './Modal';
import Form from 'react-bootstrap/Form'
import '../index.css';
import Button from 'react-bootstrap/Button';
import{ init } from 'emailjs-com';
init("user_VLCsnAJC6eTea1jTr6ZJo");

function ContactMe() {
  const initialFormData = Object.freeze({
    fname:"",
    email:"",
    message:""
  });
  
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an Error.', err))
  }
  
  const [visible, setVisible] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);
  
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim()
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    const templateId = 'template_olzhave';
    const serviceID = 'service_wjf5wfb';
    sendFeedback(serviceID, templateId, {from_name: formData.fname, email: formData.email, message_html: formData.message});
    
    setVisible(true);
    };
    
    return (
      <>
        <main>
          <div className="contact__page">
            <h1 id="contact__title">Contact me!</h1>
            <Form validated={validated} onSubmit={handleSubmit} className="contact__form">
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label column="lg">Full Name</Form.Label>
                <Form.Control onChange= {handleChange} required type="name" name="fname" placeholder="Enter full name"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label column="lg">Email address</Form.Label>
                <Form.Control onChange= {handleChange} required type="email" name="email" placeholder="Enter email"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label column="lg">Message</Form.Label>
                <Form.Control onChange= {handleChange} as="textarea" required name="message" placeholder="Enter a message" style={{height: '100px', maxHeight: '250px'}}/>
              </Form.Group>
              <Button className="form__button" type="submit">Submit form</Button>
            </Form>
            <FormModal show={visible} onHide={() => setVisible(false)}/>
          </div>
        </main>
      </>
    )
}


export default ContactMe;