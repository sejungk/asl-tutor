import React from 'react';
import './Settings.css';
import Sidebar from '../Sidebar/Sidebar'; 

const Settings = () => {
  return (
    <div className="settings-container page-container">
      <Sidebar /> 
      <div className="main-content">
        <div className="settings-text-content">
          <h1 className="font-weight-500">Settings</h1>
          <p>Adjust your app settings here.</p>
        </div>
        <div className="settings-content">

        </div>
      </div>
    </div>
  );
};

export default Settings;
