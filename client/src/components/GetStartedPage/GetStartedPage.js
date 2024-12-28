import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStartedPage.css';

const GetStartedPage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const requestWebcamPermission = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        setHasPermission(true); 
      } catch (err) {
        setHasPermission(false); 
      }
    };

    requestWebcamPermission();
  }, []);

  const handleContinue = () => {
    if (hasPermission) {
      navigate('/dashboard'); 
    } else {
      alert("Please enable webcam access to proceed.");
    }
  };

  return (
    <div className="get-started-container">
      <div className="get-started-content">
        <h1 className="title">Enable Webcam Access</h1>
        <p className="description">
          To begin learning ASL interactively, we need access to your webcam.
        </p>

        {hasPermission === null && <p>Requesting webcam permission...</p>}

        {hasPermission === false && (
          <p className="error">
            Webcam access is required for the app to function. Please enable it in your browser settings.
          </p>
        )}

        <button className="button fill" onClick={handleContinue}>
          {hasPermission ? "Continue" : "Retry"}
        </button>
      </div>
    </div>
  );
};

export default GetStartedPage;
