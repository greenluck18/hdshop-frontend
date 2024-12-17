import React from "react";
import "./Footer.css"; // Updated CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">HoneyDukeShop</p>
        <p className="footer-text">Where Magic & Sweets Intertwine</p>
        <p className="footer-contact">
          <span className="icon">💌</span> greenluck3.14159@gmail.com
        </p>
        <p className="footer-copy">© 2024 HoneyDukeShop</p>
      </div>
    </footer>
  );
};

export default Footer;
