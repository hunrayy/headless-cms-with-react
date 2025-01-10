// src/components/Footer.jsx

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-section">
          <h4>About</h4>
          <p>
            Our blog shares insights, tutorials, and the latest trends in web development, design, and technology.
          </p>
        </div> */}

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@blogapp.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Blog Street, Web City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Blog Application. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
