import App from './App';
import Home from './components/Home';
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
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projectlist", element: <ProjectList /> },
            { path: "skills", element: <Skills /> },
            { path: "contact", element: <Contact /> },
            { path: "login", element: <Login /> }

        ]
    }
];

export default routes;