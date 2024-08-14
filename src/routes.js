import App from './App';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Login from './components/Login';

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "about", element: <About /> },
            { path: "projectitem", element: <ProjectItem /> },
            { path: "skills", element: <Skills /> },
            { path: "contact", element: <Contact /> },
            { path: "login", element: <Login /> }

        ]
    }
];

export default routes;