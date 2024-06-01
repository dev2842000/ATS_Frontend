import React from 'react';
import './homePage.css'; // Import CSS file for styling
import Layout from '../../components/Layout/layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="homepage">
        <div className="background-image"></div>
        <div className="content">HomePage</div> 
      </div>
    </Layout>
  );
};

export default HomePage;
