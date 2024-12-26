import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';  

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="landing-container">
      <div className="left-side">
        <div className="left-content">
          <h1 className="landing-text">
            Interactive learning made easy: Start mastering ASL.
          </h1>
          <img 
            src="/images/asl-logo.svg" 
            alt="ASL Logo" 
            className="landing-image" 
          />
        </div>
      </div>
      <div className="right-side">
        <button 
          className="button stroke" 
          onClick={() => alert("Get Started clicked")}
        >
          Get Started
        </button>
        <button 
          className="button fill" 
          onClick={handleLoginClick} 
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
