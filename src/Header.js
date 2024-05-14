import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/registration" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/allCards" className="nav-link">
              All Cards
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
