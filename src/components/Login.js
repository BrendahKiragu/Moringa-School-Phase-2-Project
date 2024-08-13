import React,{useState} from "react";

function Login () {
    const [isLoggedIn, setIsLoggeIn] = useState(false)

    const handleAuth = () => {
        setIsLoggeIn(!isLoggedIn)
    }
    return (
        <div>
         <button onClick={handleAuth}>
            {isLoggedIn ? "Logout" : "Login"}
            </button> 
            <p>{isLoggedIn ? "Welcome back!" :"Kindly Log in"}
                </p>  
        </div>
        

        
    )
}

export default Login;