const add = function (val1, val2) {
  return val1 + val2;
};

const subtract = function (val1, val2) {
  return val1 - val2;
};

const sum = function (array_val) {
  if (array_val.length == 0) {
    return 0;
  }
  return array_val.reduce((prev, curr) => prev + curr);
};

const multiply = function (array_val) {
  return array_val.reduce((total, curr) => total * curr);
};

const power = function (val, exponent) {
  return val ** exponent;
};

const factorial = function (val) {
  let result = 1;
  for (let i = 1; i <= val; i++) {
    result *= i; 
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
