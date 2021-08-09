import clearForm from '../script.js';
import { useState, useRef, useEffect } from 'react';

function ContactModal({setVisible}, {visible}) {
    clearForm();
    const ref = useRef();
    const [isMenuOpen] = useState(true)
    
    // Set visibility of modal to false
    const checkIfClickedOutside = e => {
        if (!ref.current.contains(e.target)) {
            setVisible(false)
        }
    }
    
    // If outside of modal click, run above function to close
    useEffect(() => {
      document.addEventListener("mousedown", checkIfClickedOutside)
      return () => document.removeEventListener("mousedown", checkIfClickedOutside)
    });
    
    return (
      <div>
        {isMenuOpen && (
        <div id="myModal" className="modal">
           {/* Modal content */}
          <div ref={ref} className="modal-content">
            <span className="close" onClick={() => setVisible(false)}>×</span>
              <h2>Contact us form submitted</h2>
              <br />
              <br />
              <p>Thanks for sending me a message!</p>
              <br />
              <p>I'll get in touch with you ASAP</p>
          </div>
        </div>
      )}
      </div>
    )
  }
  
  export default ContactModal;