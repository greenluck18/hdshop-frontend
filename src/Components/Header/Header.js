import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Updated CSS file

const Header = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const storedToken = urlParams.get('authToken') || '';

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <span className="icon">🏰</span> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <span className="icon">🔑</span> Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/allCards" className="nav-link">
              <span className="icon">📜</span> All Cards
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addCard" className="nav-link">
              <span className="icon">🪄</span> Add Card
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/deleteCard" className="nav-link">
              <span className="icon">🪄</span> Delete Card
            </Link>
          </li>
          {storedToken && (
            <li className="nav-item">
              <Link to="/myItems" className="nav-link">
                <span className="icon">💎</span> My Items
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
