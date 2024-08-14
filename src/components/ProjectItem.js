import React, { useState } from "react";
import "./ProjectItem.css";

function ProjectItem({ project, handleEdit, handleDelete }) {
  const [editProject, setEditProject] = useState(false);
  const [editedProject, setEditedProject] = useState({ ...project });

  function handleEditButtonClick() {
    setEditProject(true);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditedProject({ ...editedProject, [name]: value });
  }

  function handleSaveButtonClick(e) {
    e.preventDefault();
    handleEdit(editedProject);
    setEditProject(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleEdit(editedProject);
    setEditProject(false);
  }

  return (
    <div className="project-card" key={project.id}>
      <img className="project-image" src={project.image} alt={project.name} />
      <h3>Title: {project.name}</h3>
      <p>Description: {project.description}</p>
      <p> Languages: {project.languages.join(", ")}</p>
      <p>Authors: {project.authors.join(", ")}</p>

      {editProject ? (
        <form className="project-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={editedProject.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={editedProject.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="image"
            value={editedProject.image}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="languages"
            value={editedProject.languages.join(", ")}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="authors"
            value={editedProject.authors.join(", ")}
            onChange={handleInputChange}
          />
          <button
            className="project-buttons"
            type="submit"
            onClick={handleSaveButtonClick}
          >
            Save Changes
          </button>
        </form>
      ) : (
        <button className="project-buttons" onClick={handleEditButtonClick}>
          Edit Project
        </button>
      )}
      <button className="project-buttons" onClick={() => handleDelete(project)}>
        Delete
      </button>
    </div>
  );
}

export default ProjectItem;
