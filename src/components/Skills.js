import React from "react";
import python from './images/python.png';
import django from './images/django.webp';
import pytorch from './images/pytorch.png';
import bootstrap from './images/bootstrap.png';
import sckitlearn from './images/scikitlearn.png';
import numpy from './images/NumPy.png';
import html5 from './images/html5.png';
import css3 from './images/css3.png';
import flask from './images/flask.png';
import git from './images/git.png';
import heroku from './images/heroku.png';
import './Skills.css'

function Skills() {
  return (
    <div className="skills-section">
      <h2>SKILLS</h2>

      <div className="skills-category">
        <h3>Languages</h3>
        <figure className="card">
          <img src={python} alt="Python" />
          <figcaption>Python</figcaption>
        </figure>
        <figure className="card">
          <img src={html5} alt="HTML5" />
          <figcaption>HTML5</figcaption>
        </figure>
        <figure className="card">
          <img src={css3} alt="CSS3" />
          <figcaption>CSS3</figcaption>
        </figure>
      </div>

   
      <div className="skills-category">
        <h3>Frameworks</h3>
        <figure className="card">
          <img src={django} alt="Django" />
          <figcaption>Django</figcaption>
        </figure>
        <figure className="card">
          <img src={flask} alt="Flask" />
          <figcaption>Flask</figcaption>
        </figure>  
        <figure className="card">
          <img src={pytorch} alt="PyTorch" />
          <figcaption>PyTorch</figcaption>
        </figure>
        <figure className="card">
          <img src={bootstrap} alt="Bootstrap" />
          <figcaption>Bootstrap</figcaption>
        </figure>
      </div>

      <div className="skills-category">
        <h3>Libraries</h3>
        <figure className="card">
          <img src={numpy} alt="NumPy" />
          <figcaption>NumPy</figcaption>
        </figure>
        <figure className="card">
          <img src={sckitlearn} alt="Scikit-learn" />
          <figcaption>Scikit-learn</figcaption>
        </figure>          
      </div>

      <div className="skills-category">
        <h3>Others</h3>
        <figure className="card">
          <img src={git} alt="Git" />
          <figcaption>Git</figcaption>
        </figure>
        <figure className="card">
          <img src={heroku} alt="Heroku" />
          <figcaption>Heroku</figcaption>
        </figure>        
      </div>

    </div>
  );
}

export default Skills;
