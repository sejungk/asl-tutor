import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, locked, progress, cardColor, image }) => {
  return (
    <div className={`course-card ${locked ? 'locked' : ''}`} style={{ backgroundColor: cardColor }}>
      <h3>{title}</h3>
      {locked ? (
        <div className="locked-overlay">
          <img src="/images/icons/lock-icon.png" alt="Locked icon" className="locked-icon" />
          <p className="locked-text">Course coming soon.</p>
        </div>
      ) : (
        <>
        </>
      )}
      <img src={image} alt={`${title} course`} className="course-image" />
    </div>
  );
};

export default CourseCard;
