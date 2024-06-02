import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

// const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//       login: "",
//       password: "",
//       first_name: "",
//       last_name: "",
//       email: "",
//     });
  
//     const navigate = useNavigate();
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {
//         const response = await axios.post("http://localhost:3001/register", {
//           login: formData.login,
//           password: formData.password,
//           first_name: formData.first_name,
//           last_name: formData.last_name,
//           email: formData.email,
//         });
  
//         console.log("User registered successfully:", response.data);
//         // Reset form fields or redirect to another page upon successful registration
//         navigate('/');
//       } catch (error) {
//         console.error("Registration failed:", error);
//         // Handle error (e.g., display error message to user)
//       }
//     };
  
//     return (
      
//       <div className="registration-container">
//         {/* <p style="background-image: url('img_girl.jpg');"></p> */}
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit} className="registration-form">
//           <input
//             type="text"
//             name="login"
//             placeholder="Login"
//             value={formData.login}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="first_name"
//             placeholder="First Name"
//             value={formData.first_name}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="last_name"
//             placeholder="Last Name"
//             value={formData.last_name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <button type="submit" className="register-button">
//             Register
//           </button>
//         </form>
//       </div>
//     );
//   };

const LoginRegister = () => { 
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [action, setAction] = useState('login'); 

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
              <form action=''>
                  <h1>Registration</h1>
                  <div className='input-box'>
                      <input type='text' placeholder='Login'
                      value={login} onChange={(ev) => setLogin(ev.target.value)} required />
                      <FaUser className='icon'/>
                  </div>
                  <label className="error-label">{loginError}</label>
                  <div className='input-box'>
                      <input type='email' placeholder='Email' required />
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
                          <input type="checkbox" />I agree to the terms $ conditions</label>
                  </div>
                  <button type='submit' className='login-btn'>Register</button>
                  <div className="register-link">
                      <p>Already have an account? <button type="button" onClick={() => setAction('login')}>Login</button></p>
                  </div>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
      </div>
    );
}

export default LoginRegister;
