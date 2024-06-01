import React, { ReactNode } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './layout.css';

interface ChildrenProps {
  children?: ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
