import React from 'react';
import './About.css';
import profile1 from './images/profile1.jpeg';
import profile2 from './images/profile2.jpeg';
import profile3 from './images/profile3.jpeg';
import profile4 from './images/profile4.jpeg';

function About() {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Our expertise lies in software engineering, where we design and develop robust systems that meet the evolving needs of modern businesses.</p>
        <p>With a strong foundation in cutting-edge technologies, we deliver tailored software solutions that drive efficiency and innovation.</p>
      </div>
      <div className="about-container">
        <h2>Meet Our Team</h2>
        <div className="profile-section">
          <div className="profile">
            <img src={profile1} alt="Dennis" className="profile-image" />
            <h3>Dennis</h3>
            <p>Role: Front-End Developer</p>
            <p>Dennis is an expert in crafting beautiful, user-friendly web interfaces. With a deep mastery of HTML, CSS, and JavaScript, Dennis transforms complex designs into seamless, interactive experiences. Passionate about usability, Dennis ensures every detail contributes to an intuitive user journey.</p>
            <div className="social-links">
              <a href="https://github.com/person1" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/person1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="profile">
            <img src={profile2} alt="Kevin" className="profile-image" />
            <h3>Kevin</h3>
            <p>Role: Back-End Developer</p>
            <p>Kevin excels at building robust back-end systems that power dynamic web applications. Specializing in server-side technologies and database management, Kevin develops scalable APIs and optimizes performance to support complex business requirements.</p>
            <div className="social-links">
              <a href="https://github.com/person2" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/person2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="profile">
            <img src={profile3} alt="Komfort" className="profile-image" />
            <h3>Komfort</h3>
            <p>Role: Full-Stack Developer</p>
            <p>Komfort brings a unique blend of front-end and back-end skills to every project. With a keen eye for design and a deep understanding of development processes, Komfort delivers end-to-end solutions that are both functional and visually appealing.</p>
            <div className="social-links">
              <a href="https://github.com/person3" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/person3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="profile">
            <img src={profile4} alt="Brendah" className="profile-image" />
            <h3>Brendah</h3>
            <p>Role: Full-Stack Developer</p>
            <p>Brendah is a versatile developer with expertise in both front-end and back-end technologies. Known for their problem-solving skills and attention to detail, Brendah excels in creating comprehensive solutions that integrate seamlessly across all layers of the technology stack.</p>
            <div className="social-links">
              <a href="https://github.com/person4" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/person4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
