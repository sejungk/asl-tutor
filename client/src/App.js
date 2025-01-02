import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';  
import EnableWebcamPage from './components/EnableWebcamPage/EnableWebcamPage';
import LoginPage from './components/LoginPage/LoginPage';     
import Dashboard from './components/Dashboard/Dashboard';
import Favorites from './components/Favorites/Favorites';
import Preferences from './components/Preferences/Preferences';
import Account from './components/Account/Account';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/enable-webcam" element={<EnableWebcamPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;
