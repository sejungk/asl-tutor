import React from 'react';
import '../Dashboard/Dashboard.css';
import './LockedCourseCard.css';  

const LockedCourseCard = ({ title }) => (
  <div className="course-card locked">
    <h3>{title}</h3>
    <p>Course coming soon.</p>
  </div>
);

export default LockedCourseCard;
