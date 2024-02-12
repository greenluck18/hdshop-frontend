import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = (props) => {
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   const [loginError, setLoginError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const navigate = useNavigate();

  const onButtonClick = () => {

    setLoginError("")
    setPasswordError("")

    if ("" === login) {
      setLoginError("Please enter your login")
        return
    }

    if ("" === password) {
        setPasswordError("Please enter a password")
        return
    }
    return  handleLogin();   

}

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        login,
        password
      });
    
      // localStorage.setItem("user", JSON.stringify({login, token: token}))
      props.setLoggedIn(true)
      navigate('/')
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Invalid username or password'); // Set error message for 404 status
      } else {
        console.error('Error logging in:', error);
        setErrorMessage('An error occurred while logging in'); // Set generic error message
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    onButtonClick()
   
  };
  function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (

    <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={login}
                placeholder="Enter your login here"
                onChange={ev => setlogin(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{loginError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter your password here"
                type="password"
                id="password"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
            
        </div>
        <div>
        <input
          type="checkbox" onClick={myFunction} />
        <label>Show password</label>
      </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={handleSubmit}
                value={"Log in"} />
        </div>
        {errorMessage && <p>{errorMessage}</p>} {/* Display error message if available */}
    </div>


        


    // <div>
    //   <h2>Login</h2>
    //   <form>
        
    //     <div>
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="button" onClick={handleLogin}>Login</button>
    //   </form>
    // </div>
  );
};

export default Login;