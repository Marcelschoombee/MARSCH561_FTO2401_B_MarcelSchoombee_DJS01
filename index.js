/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
// new veriable names
const initialVelocityKilometersPerHour = 10000; // velocity (km/h)
const spacecraftAccelerationMetersPerSecond = 3; // acceleration (m/s^2)
const calculationDurationInSeconds = 3600; // seconds (1 hour)
const distanceStartingPointInKilometers = 0; // distance (km)
const startingFuelCapacityInKilograms = 5000; // remaining fuel (kg)
const fuelBurnRateKilogramsPerSecond = 0.5; // fuel burn rate (kg/s)

// Function for new velocity 
const calculateNewVelocity = initialVelocityKilometersPerHour + (initialVelocityKilometersPerHour, spacecraftAccelerationMetersPerSecond, calculationDurationInSeconds ) => { //calcultes new distance
  const initialVelocityKilometersPerHour = initialVelocityKilometersPerHour * (1000 / 3600); //calculates remaining fuel
  const newVelocity = initialVelocityKilometersPerHour + (spacecraftAccelerationMetersPerSecond * calculationDurationInSeconds);
  return newVelocity; //calculates new velocity based on acceleration
}

const calculateNewDistance = (initialVelocityKilometersPerHour, calculationDurationInSeconds) => { 
  const newDistance = distanceStartingPointInKilometers + (initialVelocityKilometersPerHour * (calculationDurationInSeconds / 3600));
  return newDistance;
}

console.log(`Corrected New Velocity: ${calculateNewDistance} km/h`);
console.log(`Corrected New Distance: ${newVelocity} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






