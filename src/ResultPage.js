import React from 'react';
import './ResultPage.css';
import successImage from './success.png';
import failureImage from './failure.png';
import handcuffsImage from './handcuffs.png';
import criminalImage from './full-criminal.png'; 

// Import city images

const ResultPage = () => {
  // Array of cities with images
  const cities = [
    { name: 'Nuravgram' },
    { name: 'Shekharvati' },
    { name: 'Narmis City' },
    { name: 'Lihaspur'},
    { name: 'Yapkashnagar'},
  ];

  // Randomly select a city as criminal city
  const randomCityIndex = Math.floor(Math.random() * cities.length);
  const criminalCity = cities[randomCityIndex];

  // Simulate the fugitive's capture result
  const isCaptured = Math.random() > 0.5;
  const capturingCop = isCaptured ? 'Cop 2' : null;

  return (
    <div className="result-page">
      {/* Display criminal city */}

      <div className="emoji-container">
        {isCaptured ? (
          <img src={successImage} alt="Success" className="emoji-image" />
        ) : (
          <img src={failureImage} alt="Failure" className="emoji-image" />
        )}
      </div>
      <div className="message-container">
        <h2 className="section-title">Capture Result</h2>
        {isCaptured ? (
          <div className="success-message">
            <p>Congratulations! The fugitive has been captured by {capturingCop}.</p>
          </div>
        ) : (
          <div className="failure-message">
            <p>The fugitive managed to escape. Better luck next time!</p>
          </div>
        )}
        <a href="/city-selection" className="play-again-button">Play Again</a>
      </div>
    </div>
  );
};

export default ResultPage;
