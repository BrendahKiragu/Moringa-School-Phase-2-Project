import React from 'react';
import './Contact.css';  
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <h3>Send Us a Message</h3>
      
      <form className="contact-form">
        <p>
          <label>Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name..." />
        </p>
        
        <p>
          <label>Email:</label>
          <input type="text" id="email" name="email" placeholder="Your email..." />
        </p>
        
        <p>
          <label>Subject:</label>
          <input type="text" id="subject" name="subject" placeholder="Subject..." />
        </p>
        
        <p>
          <label>Message:</label>
          <textarea id="message" name="message" placeholder="Compose your message..." />
        </p>
        
        <p>
          <input type="submit" value="Send Message" />
        </p>
      </form>
      
      <div className="social-links">
        <a href="https://github.com/yourusername"><FaGithub />GitHub</a>
        <a href="https://linkedin.com/in/yourusername"><FaLinkedin />LinkedIn</a>
        <a href="mailto:kipkiruidennis25@.com"><FaEnvelope />Email</a>
      </div>
    </div>
  );
}

export default Contact;
