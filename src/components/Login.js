import React, { useState } from "react";
import "./ProjectItem.css";
import "./ProjectList.css";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");

  const handleAuth = (event) => {
    event.preventDefault();

    const regex = /^[a-zA-Z0-9]+$/;

    if (regex.test(username) && regex.test(password)) {
      setIsLoggedIn(true);
      setError(""); 
    } else {
      setError(
        "Invalid username or password. Please use only letters and numbers."
      );
    }
  };

  return (
    <div>
      <form className="project-form" onSubmit={handleAuth}>
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="project-buttons" type="submit">Login</button>
        
      </form>
    </div>
  );
}

export default Login;