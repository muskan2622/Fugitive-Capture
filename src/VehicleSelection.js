import React, { useState } from 'react';
import './VehicleSelection.css';
import evBikeImage from './Bike.png';
import evCarImage from './Car.png';
import evSuvImage from './Suv.png';
import cop1Image from './Cop1.png';
import cop2Image from './Cop2.png';
import cop3Image from './Cop3.png';

const VehicleSelection = () => {
  const [cop1Vehicle, setCop1Vehicle] = useState('');
  const [cop2Vehicle, setCop2Vehicle] = useState('');
  const [cop3Vehicle, setCop3Vehicle] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const vehicles = [
    { type: 'EV Bike', range: 60, count: 2, image: evBikeImage },
    { type: 'EV Car', range: 100, count: 1, image: evCarImage },
    { type: 'EV SUV', range: 120, count: 1, image: evSuvImage },
  ];

  const handleVehicleSelection = (e, setCopVehicle) => {
    setCopVehicle(e.target.value);
    setSelectedVehicle(e.target.value); // Set the selected vehicle for zoom effect
  };

  const isNextDisabled = !cop1Vehicle || !cop2Vehicle || !cop3Vehicle;

  return (
    <div className="vehicle-selection">
      <h2 className="section">Select Vehicle</h2>
      <div className="cop-row">
        <div className="cop-container">
          <img src={cop1Image} alt="Cop 1" className="cop-image" />
          <h3>Cop 1</h3>
          <select value={cop1Vehicle} onChange={(e) => handleVehicleSelection(e, setCop1Vehicle)}>
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.type} value={vehicle.type}>
                {vehicle.type} (Range: {vehicle.range} KM, Count: {vehicle.count})
              </option>
            ))}
          </select>
        </div>
        <div className="cop-container">
          <img src={cop2Image} alt="Cop 2" className="cop-image" />
          <h3>Cop 2</h3>
          <select value={cop2Vehicle} onChange={(e) => handleVehicleSelection(e, setCop2Vehicle)}>
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.type} value={vehicle.type}>
                {vehicle.type} (Range: {vehicle.range} KM, Count: {vehicle.count})
              </option>
            ))}
          </select>
        </div>
        <div className="cop-container">
          <img src={cop3Image} alt="Cop 3" className="cop-image" />
          <h3>Cop 3</h3>
          <select value={cop3Vehicle} onChange={(e) => handleVehicleSelection(e, setCop3Vehicle)}>
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.type} value={vehicle.type}>
                {vehicle.type} (Range: {vehicle.range} KM, Count: {vehicle.count})
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="vehicle-row">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.type}
            className={`vehicle-container ${selectedVehicle === vehicle.type ? 'zoom' : ''}`} // Apply zoom class if selected vehicle matches
          >
            <img src={vehicle.image} alt={vehicle.type} className="vehicle-image" />
            <p>{vehicle.type}</p>
          </div>
        ))}
      </div>
      <a href="/result" className="next-button" disabled={isNextDisabled}>
        Next
      </a>
    </div>
  );
};

export default VehicleSelection;
