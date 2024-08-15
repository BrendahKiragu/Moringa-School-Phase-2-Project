import React,{useState} from "react";

function Login () {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleAuth = (e) => {
        e.preventDefault()
        if(isLoggedIn) {
            setIsLoggedIn(false)
            setUsername('')
            setPassword('')
        } else {
            if (username && password) { 
                setIsLoggedIn(true)
            } else {
                alert("Kindly enter both username and password")
            }
        }
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
