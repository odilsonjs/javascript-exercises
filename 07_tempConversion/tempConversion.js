function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}


const convertToCelsius = function(degreeFahrenheit) {
    return round((degreeFahrenheit - 32) / 1.8, 1);
};

const convertToFahrenheit = function(degreeCelcius) {
  return round((degreeCelcius * 1.8) + 32, 1);
};

console.log(convertToFahrenheit(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
