import React from "react";
import './ProjectItem.css'

function ProjectItem ({project}) {
  return (
    <div className="project-card" key={project.id}>
      <img className="project-image" src={project.image} alt={project.name} />
      <h3>Title: {project.name}</h3>
      <p>Description: {project.description}</p>
      <p> Languages: {project.languages.join(', ')}</p>
      <p>Authors: {project.authors.join(', ')}</p>
    </div>
  );    
}

export default ProjectItem;