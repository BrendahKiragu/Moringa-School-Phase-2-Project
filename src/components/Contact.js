import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const email = "brendakiragu02@gmail.com";
  const subject = "Inquiry from Contact Form";
  const body = "Hello,\n\nI have an inquiry:\n\n";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <h3>Send Us an Email</h3>
      <p>If you have any questions or inquiries, please send us an email:</p>
      <a href={mailtoLink} rel="noopener noreferrer">
        <FaEnvelope /> Email
      </a>

      <div className="social-links">
        <a href="https://github.com/BrendahKiragu" rel="noopener noreferrer" target="_blank">
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/brenda-mwihaki-kiragu-10432218a/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href={mailtoLink} rel="noopener noreferrer">
          <FaEnvelope /> Email
        </a>
      </div>
    </div>
  );
}

export default Contact;
