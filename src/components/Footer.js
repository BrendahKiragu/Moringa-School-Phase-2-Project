import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaArrowUp, FaMapMarkerAlt } from 'react-icons/fa';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-location">
          <h4>Location</h4>
          <address>
            <FaMapMarkerAlt /> <span>Nairobi, Kenya</span>
          </address>
        </div>
        <div className="footer-social-media">
          <h4>My Social Links</h4>
          <div className="social-links">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebookF /> Facebook</a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy;2024 Thriver Coders 03. All Rights Reserved.</p>
          <div className="back-to-top">
            <a href="#top"><FaArrowUp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;