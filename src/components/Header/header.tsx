import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

interface HeaderProps {
  isAuthenticated: boolean;
  logout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, logout }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            ATS Resume
          </NavLink>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className="nav-item">
              <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Profile
              </NavLink>
            </li>
          )}
          {!isAuthenticated ? (
            <li className="nav-item">
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Login
              </NavLink>
            </li>
          ) : (
            <li className="nav-item">
              <button onClick={() => logout()}>Logout</button>
            </li>
          )}
        </ul>
        <div className={`cursor-pointer Nav-hamburger ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={closeSidebar}>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </li>
          {isAuthenticated && (
            <li onClick={closeSidebar}>
              <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Profile
              </NavLink>
            </li>
          )}
          {!isAuthenticated ? (
            <li onClick={closeSidebar}>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Login
              </NavLink>
            </li>
          ) : (
            <li onClick={closeSidebar}>
              <button onClick={() => logout()}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
