import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { API_URL } from '../../constants';

const LoginRegister = () => { 
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [action, setAction] = useState('login'); 

    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
        const response = await axios.post(API_URL + '/login', {
          login,
          password,
          first_name,
          last_name,
          email
        });
  
        const { token, userId } = response.data;
        localStorage.setItem('authToken', token);
        localStorage.setItem('login', login);
        localStorage.setItem('userId', userId);
  
        navigate('/myItems');
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setErrorMessage('Invalid username or password');
        } else {
          console.error('Error logging in:', error);
          setErrorMessage('An error occurred while logging in');
        }
      }
    };
    const handleRegister = async () => {
      try {
        
        const response = await axios.post(API_URL + '/register', {
          login,
          password
        });
  
        const { token, userId } = response.data;
        localStorage.setItem('authToken', token);

        console.log('authToken', token);
        
        localStorage.setItem('login', login);
        localStorage.setItem('userId', userId);
  
        navigate('/AllCards');
      } catch (error) {
        console.log('error in LoginRegister', error);
        if (error.response && error.response.status === 404) {
          setErrorMessage('Invalid username or password');
        } else {
          console.error('Error logging in:', error);
          setErrorMessage('An error occurred while logging in');
        }
      }
    }
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (action === 'login') {
        // Validate login and password for login action
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
      } else if (action === 'register') {
        // Validate login and password for register action
        if (login.trim() === '') {
          setLoginError('Please enter your login');
          return;
        }
  
        if (password.trim() === '') {
          setPasswordError('Please enter a password');
          return;
        }
  
        // Attempt to register
        handleRegister();
      }
    };
    

    return (
      <div className={`wrapper ${action === 'register' ? 'active' : ''}`}>
          <div className='form-box login' style={{ display: action === 'login' ? 'block' : 'none' }}>
              <form onSubmit={handleSubmit}>
                  <h1>Login</h1>
                  <div className='input-box'>
                      <input type='text' 
                       value={login}
                       placeholder='Login' 
                       onChange={(ev) => setLogin(ev.target.value)}
                       required />
                      <FaUser className='icon'/>
                  </div>
                  <div className='input-box'>
                      <input type='password' placeholder='Password'
                          value={password}
                          onChange={(ev) => setPassword(ev.target.value)}
                          required />
                      <FaLock className='icon' />
                  </div>
                  <div className='remember-forgot'>
                      <label>
                          <input type="checkbox" />Remember me </label>
                      <a href='/sendMail'>Forgot password?</a>
                  </div>
                  <button type='submit' className='login-btn'>Login</button>
                  <div className="register-link">
                      <p>Don`t have an account? <button type="button" onClick={() => setAction('register')}>Register</button></p>
                  </div>
              </form>
          </div>
  
          <div className='form-box register' style={{ display: action === 'register' ? 'block' : 'none' }}>
              <form onSubmit={handleSubmit}>
                  <h1>Registration</h1>
                  <div className='input-box'>
                      <input type='text' placeholder='First Name'
                      value={first_name} onChange={(ev) => setFirst_name(ev.target.value)} required />
                      <FaUser className='icon'/>
                  </div>
                  <div className='input-box'>
                      <input type='text' placeholder='Last Name'
                      value={last_name} onChange={(ev) => setLast_name(ev.target.value)} required />
                      <FaUser className='icon'/>
                  </div>
                  <div className='input-box'>
                      <input type='text' placeholder='Login'
                      value={login} onChange={(ev) => setLogin(ev.target.value)} required />
                      <FaUser className='icon'/>
                  </div>
                  <label className="error-label">{loginError}</label>
                  <div className='input-box'>
                      <input type='email' placeholder='Email'
                      value={email} onChange={(ev) => setEmail(ev.target.value)} required />
                      <FaEnvelope className='icon'/>
                  </div>
                  <div className='input-box'>
                      <input type='password' placeholder='Password' 
                      onChange={(ev) => setPassword(ev.target.value)}
                      required />
                      <FaLock className='icon' />
                  </div>
                  <label className="error-label">{passwordError}</label>
                  <div className='remember-forgot'>
                      <label>
                          <input type="checkbox" />I agree to the terms & conditions</label>
                  </div>
                  <button type='submit' className='login-btn'>Register</button>
                  <div className="login-link">
                      <p>Already have an account? <button type="button" onClick={() => setAction('login')}>Login</button></p>
                  </div>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
      </div>
    );
}

export default LoginRegister;
