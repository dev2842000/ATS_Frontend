import React from 'react';
import './homePage.css'; // Import CSS file for styling

const HomePage: React.FC = () => {
  return (
      <div className="homepage-wrapper">
          <h2 className='text-white font-sans'>Home Page </h2>
          <br />
          <p className='text-white'> Welcome to the home page!</p>
      </div>
  );
};

export default HomePage;
