import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
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
    return handleLogin();
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        login,
        password
      });
      const { token } = response.data;
      const { userId } = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem("login", login);
      localStorage.setItem("userId", userId);
      navigate('/')
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Invalid username or password');
      } else {
        console.error('Error logging in:', error);
        setErrorMessage('An error occurred while logging in');
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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
  );
};

export default Login;