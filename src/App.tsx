import React from 'react';
import './App.css';
import { Outlet } from 'react-router';
import Layout from './components/Layout/layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
