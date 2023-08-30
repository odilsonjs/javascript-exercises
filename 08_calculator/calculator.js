const add = function(number1, number2) {
  return number1 + number2;
	
};

const subtract = function(number1, number2) {
  return number1 - number2
	
};

const sum = function(theArray) {
  let total = 0;
  for (let i of theArray){
    total += i
  }
  return total;
	
};

const multiply = function(theArray) {
  let product = 1;
  for (let i of theArray){
    product *= i
  }
  return product;
};

const power = function(number, power) {
  return number ** power;
	
};

const factorial = function(number) {
  let theArray = [1];
  let result = 1;
  for (let i = 1; i <= number; i++){
    theArray.push(i);
  }
  for(let p of theArray){
    result *= p;
  }
  return result;
	
};
console.log(multiply([2,4]));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
