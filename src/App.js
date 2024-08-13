// import NavBar from './components/NavBar';
import './App.css';
import profilepic from './components/images/profilepic.png'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <h1>Thriver Triver 03</h1>
      <p>Full Stack Developer based in Nairobi, Kenya</p>
      <img src={profilepic} alt="profilepic" />
    </div>
  );
}

export default App;
