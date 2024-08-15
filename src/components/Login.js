import React, { useState } from "react";
import "./ProjectItem.css";
import "./ProjectList.css";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState(""); // Define username state
  const [password, setPassword] = useState(""); // Define password state
  const [error, setError] = useState("");

  const handleAuth = (event) => {
    event.preventDefault();

    // Regular expression to check for letters and numbers
    const regex = /^[a-zA-Z0-9]+$/;

    if (regex.test(username) && regex.test(password)) {
      // If both username and password pass the validation
      setIsLoggedIn(true);
      setError(""); // Clear any previous error messages
    } else {
      // If the validation fails, show an error message
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