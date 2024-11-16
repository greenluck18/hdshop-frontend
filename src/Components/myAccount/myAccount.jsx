// MyAccount.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MyAccount() {
  const navigate = useNavigate();

  // Check if user is logged in (has token)
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      // If no token, redirect to login page
      navigate('/login');
    }
  }, [navigate]);

  // Log Out function
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("authToken");
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div>
      <h1>My Account</h1>
      <p>Welcome to your account page!</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default MyAccount;
