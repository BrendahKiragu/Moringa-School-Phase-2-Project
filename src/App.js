import './App.css';
import profilepic from './components/images/profpic.avif'
import './App.css';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />

      <h1>Hi, We're Thriver Coders 03</h1>
      <p>Full Stack Developers based in Nairobi, Kenya</p>
      <img src={profilepic} alt="profilepic" />
      <p>Coding Your Dreams into Reality, One Code Line at a Time.</p>
    </div>
  );
}

export default App;
