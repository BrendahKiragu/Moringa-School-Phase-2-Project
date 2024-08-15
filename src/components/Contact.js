import React from 'react';
import './Contact.css';  
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const email = 'kipkiruidennis25@gmail.com';
  const subject = 'Inquiry from Contact Form';
  const body = 'Hello,\n\nI have an inquiry:\n\n';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <h3>Send Us an Email</h3>
      <p>If you have any questions or inquiries, please send us an email:</p>
      <a href={mailtoLink} className="contact-email-link">Send Email</a>
      
      <div className="social-links">
        <a href="https://github.com/yourusername"><FaGithub /> GitHub</a>
        <a href="https://linkedin.com/in/yourusername"><FaLinkedin /> LinkedIn</a>
        <a href={`mailto:${email}`}><FaEnvelope /> Email</a>
      </div>
    </div>
  );
}

export default Contact;
