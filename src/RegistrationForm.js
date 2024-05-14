import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegistrationForm.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        login,
        password,
      });

      const { token, userId } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("login", login);
      localStorage.setItem("userId", userId);

      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("Invalid username or password");
      } else {
        console.error("Error logging in:", error);
        setErrorMessage("An error occurred while logging in");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate login and password
    if (login.trim() === "") {
      setLoginError("Please enter your login");
      return;
    }

    if (password.trim() === "") {
      setPasswordError("Please enter a password");
      return;
    }

    // Attempt to log in
    handleLogin();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="registration-container">
      <h2>Login</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          value={login}
          placeholder="Enter your login here"
          onChange={(ev) => setLogin(ev.target.value)}
          className="input-box"
        />
        <label className="error-label">{loginError}</label>

        <div className="password-input-container">
          <input
            value={password}
            placeholder="Enter your password here"
            type={showPassword ? "text" : "password"}
            onChange={(ev) => setPassword(ev.target.value)}
            className="input-box"
          />
          <img
            src={
              showPassword ? "/path/to/open-eye.svg" : "/path/to/closed-eye.svg"
            }
            alt="Toggle password visibility"
            className="visibility-icon"
            onClick={togglePasswordVisibility}
          />
        </div>
        <label className="error-label">{passwordError}</label>

        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Login;
