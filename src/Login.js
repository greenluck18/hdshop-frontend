import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import CSS for styling

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        login,
        password
      });

      const { token, userId } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('login', login);
      localStorage.setItem('userId', userId);

      navigate('/');
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

    // Validate login and password
    if (login.trim() === '') {
      setLoginError('Please enter your login');
      return;
    }

    if (password.trim() === '') {
      setPasswordError('Please enter a password');
      return;
    }

    // Attempt to log in
    handleLogin();
  };

  return (
    <div className="login-container">
      <div className="title">Login</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            value={login}
            placeholder="Enter your login here"
            onChange={(ev) => setLogin(ev.target.value)}
            className="input-box"
          />
          <label className="error-label">{loginError}</label>
        </div>
        <div className="input-container">
          <input
            value={password}
            placeholder="Enter your password here"
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            className="input-box"
          />
          <label className="error-label">{passwordError}</label>
        </div>
        <div className="password-toggle">
          <input type="checkbox" id="showPassword" />
          <label htmlFor="showPassword">Show password</label>
        </div>
        <div className="input-container">
          <button type="submit" className="login-button">
            Log In
          </button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Login;
