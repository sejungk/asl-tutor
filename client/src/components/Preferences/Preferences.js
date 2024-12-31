import React from 'react';
import './Preferences.css';
import Sidebar from '../Sidebar/Sidebar'; 

const Preferences = () => {
  return (
    <div className="preferences-container page-container">
      <Sidebar /> 
      <div className="main-content">
        <div className="preferences-text-content">
          <h1 className="font-weight-500">Preferences</h1>
          <p>Set up your preferences here.</p>
        </div>
        <div className="preferences-content">

        </div>
      </div>
    </div>
  );
};

export default Preferences;
