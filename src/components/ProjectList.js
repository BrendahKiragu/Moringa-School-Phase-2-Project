import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import "./ProjectItem.css";
import "./ProjectList.css";
import Login from "./Login";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    languages: [],
    authors: [],
    image: "",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const regex = /^[a-zA-Z0-9]+$/;

    if (regex.test(username) && regex.test(password)) {
      setIsLoggedIn(true);
      setError("");
      setShowLoginForm(false); // Hide login form after successful login
    } else {
      setError(
        "Invalid username or password. Please use only letters and numbers."
      );
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "languages" || name === "authors") {
      setNewProject({
        ...newProject,
        [name]: value.split(",").map((input) => input.trim()),
      });
    } else {
      setNewProject({ ...newProject, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects([...projects, data]);
        setNewProject({
          name: "",
          description: "",
          languages: [],
          authors: [],
          image: "",
        });
      })
      .catch((error) => console.error("Error posting project:", error));
  };

  const handleDelete = (project) => {
    if (!isLoggedIn) {
      alert("Please log in to delete projects.");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (confirmDelete) {
      fetch(`http://localhost:4000/projects/${project.id}`, {
        method: "DELETE",
      })
        .then(() => {
          setProjects(
            projects.filter(
              (selectedProject) => selectedProject.id !== project.id
            )
          );
        })
        .catch((error) => console.error("Error deleting project:", error));
    }
  };

  const handleEdit = (editedProject) => {
    if (!isLoggedIn) {
      alert("Please log in to edit projects.");
      return;
    }

    fetch(`http://localhost:4000/projects/${editedProject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProject),
    })
      .then((response) => response.json())
      .then((updatedProject) => {
        setProjects(
          projects.map((project) =>
            project.id === updatedProject.id ? updatedProject : project
          )
        );
      })
      .catch((error) => console.error("Error editing project:", error));
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="project-list">
      <div className="project-items">
        <h2>Our recent Projects</h2>
        <div>
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>

      {!isLoggedIn ? (
        <div className="login-section">
          <h3>Login to access the project list</h3>

          {showLoginForm && (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              setIsLoggedIn={setIsLoggedIn} 
              handleLogin={handleLogin}
              error={error}
            />
          )}
          <button onClick={toggleLoginForm} className="project-buttons">
            {showLoginForm ? "CANCEL" : "LOGIN"}
          </button>
        </div>

      ) : (
        <>
          <button className="project-buttons" onClick={handleLogout}>
            Logout
          </button>
          <form className="project-form" onSubmit={handleSubmit}>
            <h3>Add a New Project</h3>
            <input
              type="text"
              name="name"
              placeholder="Project Name"
              value={newProject.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Project Description"
              value={newProject.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Project Image URL"
              value={newProject.image}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="languages"
              placeholder="Languages (comma-separated)"
              value={newProject.languages.join(", ")}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="authors"
              placeholder="Authors (comma-separated)"
              value={newProject.authors.join(", ")}
              onChange={handleInputChange}
              required
            />
            <button className="project-buttons" type="submit">
              Add Project
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ProjectList;
