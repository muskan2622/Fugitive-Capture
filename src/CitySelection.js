import React, { useState } from 'react';
import './CitySelection.css';
import cop1Image from './Cop1.png';
import cop2Image from './Cop2.png';
import cop3Image from './Cop3.png';
import cityImage1 from './city/Nuravgram.png';
import cityImage2 from './city/Shekharvati.png';
import cityImage3 from './city/Narmis City.png';
import cityImage4 from './city/Lihaspur.png';
import cityImage5 from './city/Yapkashnagar.png';

const CitySelection = () => {
  const [cop1City, setCop1City] = useState('');
  const [cop2City, setCop2City] = useState('');
  const [cop3City, setCop3City] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const cities = [
    { name: 'Nuravgram', image: cityImage1 },
    { name: 'Shekharvati', image: cityImage2 },
    { name: 'Narmis City', image: cityImage3 },
    { name: 'Lihaspur', image: cityImage4 },
    { name: 'Yapkashnagar', image: cityImage5 },
  ];

  const handleCitySelection = (e, setCopCity) => {
    setCopCity(e.target.value);
    setSelectedCity(e.target.value); // Set the selected city for zoom effect
  };

  const isNextDisabled =
    !cop1City || !cop2City || !cop3City || new Set([cop1City, cop2City, cop3City]).size !== 3;

  return (
    <div className="city-selection">
      <h2 className="section">Select City</h2>
      <div className="cop-row">
        <div className="cop-container">
          <img src={cop1Image} alt="Cop 1" className="cop-image" />
          <div className="cop-section">
            <h3>Cop 1</h3>
            <select value={cop1City} onChange={(e) => handleCitySelection(e, setCop1City)}>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="cop-container">
          <img src={cop2Image} alt="Cop 2" className="cop-image" />
          <div className="cop-section">
            <h3>Cop 2</h3>
            <select value={cop2City} onChange={(e) => handleCitySelection(e, setCop2City)}>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="cop-container">
          <img src={cop3Image} alt="Cop 3" className="cop-image" />
          <div className="cop-section">
            <h3>Cop 3</h3>
            <select value={cop3City} onChange={(e) => handleCitySelection(e, setCop3City)}>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="city-row">
        {cities.map((city) => (
          <div
            key={city.name}
            className={`city-container ${selectedCity === city.name ? 'zoom' : ''}`} // Apply zoom class if selected city matches
          >
            <img src={city.image} alt={city.name} className="city-image" />
            <p>{city.name}</p>
          </div>
        ))}
      </div>
      <a href="/vehicle-selection" className="next-button" disabled={isNextDisabled}>
        Next
      </a>
    </div>
  );
};

export default CitySelection;
