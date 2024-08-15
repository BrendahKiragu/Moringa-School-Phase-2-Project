import React,{useState} from "react";

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(''); // Define username state
    const [password, setPassword] = useState(''); // Define password state

    const handleAuth = () => {
        setIsLoggedIn(!isLoggedIn)
    }

return (
    <div>
    {isLoggedIn ? (
      <div>
        <p>Welcome back, {username}!</p>
        <button onClick={handleAuth}>Logout</button>
      </div>
    ) : (
      <form onSubmit={handleAuth}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Login</button>
        <p>Welcome To Our Portfolio</p>
      </form>
    )}
  </div>
);
}
      
<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> parent of 78d76e9 (Resolve merge conflicts and complete merge)
