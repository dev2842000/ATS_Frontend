import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

interface HeaderProps {
  isAuthenticated:boolean;
  logout:() => void;
}
const Header: React.FC<HeaderProps> = ({isAuthenticated, logout}) => {
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          ATS Resume
        </NavLink>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated ?
          <li className="nav-item">
            <NavLink 
              to="/profile" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Profile
            </NavLink>
          </li>:
          ''
        }
        {!isAuthenticated ?
        <li className="nav-item">
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Login
          </NavLink>
        </li>
        :
        <li className="nav-item">
        <button onClick={()=> logout()}>Logout</button>
      </li>
        }
      </ul>
    </nav>
  );
}

export default Header;
