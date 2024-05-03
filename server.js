const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Mock data
const cities = [
  { name: 'Yapkashnagar', distance: 60 },
  { name: 'Lihaspur', distance: 50 },
  { name: 'Narmis City', distance: 40 },
  { name: 'Shekharvati', distance: 30 },
  { name: 'Nuravgram', distance: 20 },
];

const vehicles = [
  { type: 'EV Bike', range: 60, count: 2 },
  { type: 'EV Car', range: 100, count: 1 },
  { type: 'EV SUV', range: 120, count: 1 },
];

let fugitiveCity;

// Simulate the fugitive's location
const simulateFugitiveLocation = () => {
  const randomIndex = Math.floor(Math.random() * cities.length);
  fugitiveCity = cities[randomIndex].name;
};

// Check if the cop successfully captured the fugitive
const checkCaptureSuccess = (selectedCity, selectedVehicle) => {
  const city = cities.find((city) => city.name === selectedCity);
  const vehicle = vehicles.find((vehicle) => vehicle.type === selectedVehicle);

  if (city && vehicle && vehicle.range >= city.distance * 2 && vehicle.count > 0) {
    if (selectedCity === fugitiveCity) {
      return `Congratulations! The fugitive has been captured by the cop in ${selectedCity}.`;
    } else {
      return `The fugitive was not found in ${selectedCity}.`;
    }
  } else {
    return 'Invalid city or vehicle selection.';
  }
};

app.post('/api/capture', (req, res) => {
  const { city, vehicle } = req.body;
  simulateFugitiveLocation();
  const result = checkCaptureSuccess(city, vehicle);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});