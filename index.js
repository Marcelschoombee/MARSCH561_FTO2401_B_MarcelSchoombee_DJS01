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
const calculateNewVelocity = (initialVelocityKilometersPerHour, spacecraftAccelerationMetersPerSecond, calculationDurationInSeconds ) => { //calcultes new distance
  const initialVelocityMetersPerSecond  = initialVelocityKilometersPerHour * (1000 / 3600); //calculates remaining fuel
  const newVelocity = initialVelocityMetersPerSecond + (spacecraftAccelerationMetersPerSecond * calculationDurationInSeconds);
  return newVelocity; //calculates new velocity based on acceleration
}
// Function for new distance
const calculateNewDistance = (initialVelocityKilometersPerHour, calculationDurationInSeconds) => { 
  const newDistance = distanceStartingPointInKilometers + (initialVelocityKilometersPerHour * (calculationDurationInSeconds / 3600));
  return newDistance;
}

// Function remaining fuel with throw error warning
const calculateRemainingFuel = (startingFuelCapacityInKilograms, fuelBurnRateKilogramsPerSecond, calculationDurationInSeconds) => {
  const remainingFuel = startingFuelCapacityInKilograms - (fuelBurnRateKilogramsPerSecond * calculationDurationInSeconds);
  if (remainingFuel < 0) {
    throw new Error('Warning! Fuel depleted!');
  }
  return remainingFuel;
}

// Calculation 
const newVelocity = calculateNewVelocity(initialVelocityKilometersPerHour, spacecraftAccelerationMetersPerSecond, calculationDurationInSeconds);
const newDistance = calculateNewDistance(initialVelocityKilometersPerHour, calculationDurationInSeconds);
const remainingFuel = calculateRemainingFuel(startingFuelCapacityInKilograms, fuelBurnRateKilogramsPerSecond, calculationDurationInSeconds);


console.log(`Corrected New Velocity: ${calculateNewDistance} km/h`);
console.log(`Corrected New Distance: ${newVelocity} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






