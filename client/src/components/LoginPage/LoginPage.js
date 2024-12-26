import React from 'react';
import './LoginPage.css';  

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-side">
        <div className="left-content">
          <h1 className="login-text">
            Interactive learning made easy: Start mastering ASL.
          </h1>
          <img 
            src="/images/asl-logo.svg" 
            alt="ASL Logo" 
            className="login-image" 
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
          onClick={() => alert("Log In clicked")}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
