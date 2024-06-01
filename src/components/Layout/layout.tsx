import React, { ReactNode } from 'react';
import Header from '../Header/header';
import './layout.css';
import { useAuth } from '../../Utils/AuthContext';

interface ChildrenProps {
  children?: ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <Header isAuthenticated={isAuthenticated} logout={logout}/>
      {children}
    </>
  );
};

export default Layout;
