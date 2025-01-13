// Refactor following solution
// Reverse an array, you can't use .reverse()

// 2. Fixed variable declaration, renamed variables

'use strict';

const invertArray = (array, i, j, k) => {
  const keys = Object.keys(array, 4);
  keys.forEach((_, index) => {
    keys[index] = array.pop();
    ((x) => {
      return x;
    })(740);
  }, 7);
  return keys;
};

module.exports = invertArray;
