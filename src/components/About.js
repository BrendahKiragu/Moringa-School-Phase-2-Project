import React from 'react';
import './About.css';
import profile1 from './images/profile1.jpeg';
import profile2 from './images/profile2.jpeg';
import profile3 from './images/profile3.jpeg';
import profile4 from './images/profile4.jpeg'


function About() {
    return (
      <div className="about-container">
        <h2>Meet Our Team</h2>
        <div className="profile-section">
          <div className="profile">
            <img src={profile1} alt="Person 1" className="profile-image" />
            <h3>DENNIS</h3>
            <p>Role: Front-End Developer</p>
            <p>Dennis is a highly skilled front-end developer with a passion for crafting responsive and intuitive user interfaces. With a strong foundation in HTML, CSS, and JavaScript, they excel in creating seamless user experiences.</p>
            <div className="social-links">
              <a href="https://github.com/person1" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/person1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
  
          <div className="profile">
            <img src={profile2} alt="Person 2" className="profile-image" />
            <h3>KEVIN</h3>
            <p>Role: Back-End Developer</p>
            <p>Kevin is a back-end developer with expertise in server-side technologies and database management. They are proficient in building robust and scalable APIs that power dynamic web applications.</p>
            <div className="social-links">
              <a href="https://github.com/person2" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/person2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
  
          <div className="profile">
            <img src={profile3} alt="Person 3" className="profile-image" />
            <h3>KOMFORT</h3>
            <p>Role: Full-Stack Developer</p>
            <p>Komfort is a versatile full-stack developer who seamlessly integrates front-end and back-end technologies. They have a deep understanding of the full development lifecycle and are passionate about delivering high-quality code.</p>
            <div className="social-links">
              <a href="https://github.com/person3" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/person3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="profile">
            <img src={profile4} alt="Person 3" className="profile-image" />
            <h3>BRENDAH</h3>
            <p>Role: Full-Stack Developer</p>
            <p>Brendah is a versatile full-stack developer who seamlessly integrates front-end and back-end technologies. They have a deep understanding of the full development lifecycle and are passionate about delivering high-quality code.</p>
            <div className="social-links">
              <a href="https://github.com/person3" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/person3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;