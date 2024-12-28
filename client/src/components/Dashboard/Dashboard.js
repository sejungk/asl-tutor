import React from 'react';
import './Dashboard.css';
import CourseCard from '../CourseCard/CourseCard';
import coursesData from '../../data/courses.json';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-section">
          <img src="/images/icons/girl-1.png" alt="Jenny Lin" className="profile-pic" />
          <h4>Jenny Lin</h4>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <button className="nav-button active">
                <img src="/images/icons/course-icon.svg" alt="Jenny Lin" className="nav-icon" />
                My courses
              </button>
            </li>
            <li>
              <button className="nav-button">
                <img src="/images/icons/favorites-icon.svg" alt="Jenny Lin" className="nav-icon" />
                Favorites
              </button>
            </li>
            <li>
              <button className="nav-button">
                <img src="/images/icons/preferences-icon.svg" alt="Jenny Lin" className="nav-icon" />
                Preferences
              </button>
            </li>
            <li>
              <button className="nav-button">
                <img src="/images/icons/account-icon.svg" alt="Jenny Lin" className="nav-icon" />
                My account
              </button>
            </li>
            <li>
              <button className="nav-button">
                <img src="/images/icons/settings-icon.svg" alt="Jenny Lin" className="nav-icon" />
                Settings
              </button>
            </li>
          </ul>
        </nav>
        <button className="nav-button sign-out">
          <img src="/images/icons/sign-out-icon.svg" alt="Jenny Lin" className="nav-icon" />
            Sign out
        </button>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="dashboard-text-content">
          <h1 className="font-weight-500">Welcome, Jenny!</h1>
          <p>What would you like to learn today?</p>
        </div>
        <div className="course-grid">
          {coursesData.map((course, index) => (
            <CourseCard 
              key={index}
              title={course.title}
              totalCourses={course.totalCourses}
              cardColor={course.cardColor}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
