import React from "react";
import './ProjectItem.css'

function ProjectItem ({project, handleEdit, handleDelete}) {
  return (
    <div className="project-card" key={project.id}>
      <img className="project-image" src={project.image} alt={project.name} />
      <h3>Title: {project.name}</h3>
      <p>Description: {project.description}</p>
      <p> Languages: {project.languages.join(', ')}</p>
      <p>Authors: {project.authors.join(', ')}</p>
      <button onClick={()=>handleEdit(project)} >Edit</button>
      <button onClick={() => handleDelete(project)} >Delete</button>
    </div>
  );    
}

export default ProjectItem;