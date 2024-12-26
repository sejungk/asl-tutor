import React, { useEffect, useRef, useState } from 'react';
import { initHandTracking, runHandTracking } from '../services/handTracking';

const WebcamComponent = () => {
  const videoRef = useRef(null);
  const [hands, setHands] = useState(null);

  useEffect(() => {
    const handsInstance = initHandTracking((results) => {
      // Handle results (e.g., display the hand landmarks or match ASL signs)
      console.log(results);
    });
    setHands(handsInstance);

    // Initialize webcam
    const video = videoRef.current;
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current && hands) {
        runHandTracking(videoRef.current, hands);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [hands]);

  return <video ref={videoRef} width="640" height="480" />;
};

export default WebcamComponent;
