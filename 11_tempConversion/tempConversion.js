const convertToCelsius = function(degrees) {
  const converted = (degrees - 32) * 5/9
  return Math.round(converted * 10) / 10
};

const convertToFahrenheit = function(degrees) {
  const converted = (degrees * 9/5 + 32)
  return Math.round(converted * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
