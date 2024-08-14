import './App.css';
import profilepic from './components/images/profilepic.png'
import './App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <h1>Hi, I'm Thriver Coder 03</h1>
      <p>Full Stack Developer based in Nairobi, Kenya</p>
      <img src={profilepic} alt="profilepic" />
      <p>Coding Your Dreams into Reality, One Code Line at a Time.</p>
    </div>
  );
}

export default App;
