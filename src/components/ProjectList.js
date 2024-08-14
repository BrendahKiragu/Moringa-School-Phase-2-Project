import React, { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import './ProjectItem.css'

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    languages: [],
    authors: [],
    image: '',
  });  

  useEffect(() => {
    fetch('http://localhost:4000/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching project data:', error));
  }, []);

  const handleInputChange = (event) => {
    const {name, value} = event.target;

    if (name === 'languages' || name === 'authors'){
      setNewProject({...newProject, [name]: value.split(',').map(input=>input.trim())});
    }else{
      setNewProject({...newProject, [name]: value});
    }
  };

   const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:4000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    })
      .then(response => response.json())
      .then(data => {
        setProjects([...projects, data]);
        setNewProject({
          name: '',
          description: '',
          languages: [],
          authors: [],
          image: '',
        });
      })
      .catch(error => console.error('Error posting project:', error));
  };

   function handleDelete (project){
    fetch(`http://localhost:4000/projects/${project.id}`, {
      method: 'DELETE',
    })
     .then(() => {
        setProjects(projects.filter(selectedproject => selectedproject.id !== project.id));
      })
     .catch(error => console.error('Error deleting project:', error));
   }

  return (
    <div className='project-list'>
      <div className='project-items'>
        <h2>Our recent Projects</h2>
        <div>
          {projects.map((project) => (
          <ProjectItem  project={project} handleDelete={handleDelete} />
         ))}
        </div>
      </div>
      <form className='project-form' onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={newProject.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={newProject.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Project Image URL"
          value={newProject.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="languages"
          placeholder="Languages (comma-separated)"
          value={newProject.languages.join(', ')}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="authors"
          placeholder="Authors (comma-separated)"
          value={newProject.authors.join(', ')}
          onChange={handleInputChange}
        />
        <button type="submit">Add Project</button>

      </form>
    </div>
  );
};

export default ProjectList;