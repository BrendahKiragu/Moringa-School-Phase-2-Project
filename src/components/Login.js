import React,{useState} from "react";

function Login () {
    const [isLoggedIn, setIsLoggeIn] = useState(false)

    const handleAuth = () => {
        setIsLoggeIn(!isLoggedIn)
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
        <p>Kindly Log in</p>
      </form>
    )}
  </div>
);
}
      
export default Login;