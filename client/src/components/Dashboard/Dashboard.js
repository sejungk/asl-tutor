// Dashboard.js
import React from 'react';
import './Dashboard.css';
import CourseCard from '../CourseCard/CourseCard';
import coursesData from '../../data/courses.json';
import Sidebar from '../Sidebar/Sidebar'; // Import the new Sidebar component

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Use the Sidebar component */}
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
