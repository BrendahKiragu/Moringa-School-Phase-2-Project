import React, { useState } from "react";
import "./ProjectItem.css";

function ProjectItem({ project, handleEdit, handleDelete, isLoggedIn }) {
  const [editProject, setEditProject] = useState(false);
  const [editedProject, setEditedProject] = useState({ ...project });

  function handleEditButtonClick() {
    if (!isLoggedIn) {
      alert('Please log in to edit a project.');
      return;
    }
    setEditProject(true);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    if (name === "languages" || name === "authors") {
      setEditedProject({
        ...editedProject,
        [name]: value.split(",").map((input) => input.trim()),
      });
    } else {
      setEditedProject({ ...editedProject, [name]: value });
    }
  }

  function handleSaveButtonClick(e) {
    e.preventDefault();

    const confirmSaveChanges = window.confirm('Are you sure you want to save changes to this project?');
    if (confirmSaveChanges) {
      handleEdit(editedProject);
      setEditProject(false);
    }
  }

  function handleUpdatedFormSubmit(e) {
    e.preventDefault();
    handleSaveButtonClick(e);
  }

  function handleDeleteButtonClick() {
    if (!isLoggedIn) {
      alert('Please log in to delete a project.');
      return;
    }
      handleDelete(project);
    
  }

  return (
    <div className="project-card" key={project.id}>
      <img className="project-image" src={project.image} alt={project.name} />
      <h3>Title: {project.name}</h3>
      <p>Description: {project.description}</p>
      <p>Languages: {project.languages.join(", ")}</p>
      <p>Authors: {project.authors.join(", ")}</p>

      {editProject ? (
        <form className="project-form" onSubmit={handleUpdatedFormSubmit}>
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
            className="project-buttons edit"
            type="submit"
            onClick={handleSaveButtonClick}
          >
            Save Changes
          </button>
        </form>
      ) : (
        <>
          <button className="project-buttons edit" onClick={handleEditButtonClick}>
            Edit Project
          </button>
          <button className="project-buttons delete" onClick={handleDeleteButtonClick}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default ProjectItem;