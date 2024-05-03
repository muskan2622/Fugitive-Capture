import React from 'react';
import './LandingPage.css';
import bannerImage from './car.png'; 
import bannersecImage from './image-b.png'
import handcuffs from './handcuffs.png'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <div className="text-container">
          <h1 className="title">Fugitive Capture</h1>
          <h4 className="description">
            A notorious criminal escape artist has vanished again, and it's up to you to capture them!
          </h4>
          <img src={handcuffs} alt="Game Banner" className="handcuffs" /> 
          <p className="description">
            Choose your city and vehicle wisely, and be the first to apprehend the fugitive.
          </p>
          <a href="/city-selection" className="start-button">
            Start Game
          </a>
        </div>
      </div>
      <div className="banner-container">
        <img src={bannerImage} alt="Game Banner" className="banner" /> 
        <img src={bannersecImage} alt="Game Banner" className="banner" />
      </div>
    </div>
  );
};

export default LandingPage;
