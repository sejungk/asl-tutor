// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="/images/icons/girl-1.png" alt="Jenny Lin" className="profile-pic" />
        <h4>Jenny Lin</h4>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <button className="nav-button active">
              <img src="/images/icons/course-icon.svg" alt="My courses" className="nav-icon" />
              My courses
            </button>
          </li>
          <li>
            <button className="nav-button">
              <img src="/images/icons/favorites-icon.svg" alt="Favorites" className="nav-icon" />
              Favorites
            </button>
          </li>
          <li>
            <button className="nav-button">
              <img src="/images/icons/preferences-icon.svg" alt="Preferences" className="nav-icon" />
              Preferences
            </button>
          </li>
          <li>
            <button className="nav-button">
              <img src="/images/icons/account-icon.svg" alt="My account" className="nav-icon" />
              My account
            </button>
          </li>
          <li>
            <button className="nav-button">
              <img src="/images/icons/settings-icon.svg" alt="Settings" className="nav-icon" />
              Settings
            </button>
          </li>
        </ul>
      </nav>
      <button className="nav-button sign-out">
        <img src="/images/icons/sign-out-icon.svg" alt="Sign out" className="nav-icon" />
        Sign out
      </button>
    </div>
  );
};

export default Sidebar;
