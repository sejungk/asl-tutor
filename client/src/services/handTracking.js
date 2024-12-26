import { Hands } from '@mediapipe/hands';
import * as tf from '@tensorflow/tfjs';

export const initHandTracking = (onResults) => {
  const hands = new Hands({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }});
  hands.setOptions({
    maxNumHands: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  hands.onResults(onResults);
  return hands;
};

export const runHandTracking = async (videoElement, hands) => {
  await hands.send({ image: videoElement });
};
