import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            This is for peoples who want to take there proffesional jounry to next level.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <Link to="/profile" className="nav-link">Profile</Link>
            <br/>
            <Link to="/" className="nav-link">Home</Link>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
