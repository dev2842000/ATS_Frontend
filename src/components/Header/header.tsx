import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Assuming you have a CSS file for styling

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">ATS Resume</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
