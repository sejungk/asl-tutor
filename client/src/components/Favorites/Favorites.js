import React from 'react';
import './Favorites.css';
import Sidebar from '../Sidebar/Sidebar';

const Favorites = () => {
  return (
    <div className="favorites-container page-container">
      <Sidebar /> 
      <div className="main-content">
        <div className="favorites-text-content">
          <h1 className="font-weight-500">Your Favorites</h1>
          <p>Mark courses as favorites to easily access them here.</p>
        </div>
        <div className="favorites-content">
        </div>
      </div>
    </div>
  );
};

export default Favorites;
