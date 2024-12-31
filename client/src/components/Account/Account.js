import React from 'react';
import './Account.css';
import Sidebar from '../Sidebar/Sidebar'; 

const Account = () => {
  return (
    <div className="account-container page-container">
      <Sidebar /> 
      <div className="main-content">
        <div className="account-text-content">
          <h1 className="font-weight-500">Account Settings</h1>
          <p>Manage your account settings.</p>
        </div>
        <div className="account-content">

        </div>
      </div>
    </div>
  );
};

export default Account;
