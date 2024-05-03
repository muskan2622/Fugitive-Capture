import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LandingPage from './LandingPage';
import CitySelection from './CitySelection';
import VehicleSelection from './VehicleSelection';
import ResultPage from './ResultPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/city-selection" element={<CitySelection />} />
        <Route path="/vehicle-selection" element={<VehicleSelection />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;