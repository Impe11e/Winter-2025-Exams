// Refactor following solution
// Reverse an array, you can't use .reverse()

// 3. Removed unnecessary elements, fixed return placement

'use strict';

const invertArray = (array) => {
  const keys = Object.keys(array);
  keys.forEach((_, index) => {
    keys[index] = array.pop();
  });
  return keys;
};

module.exports = invertArray;
