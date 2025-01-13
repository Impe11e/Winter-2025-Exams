// Refactor following solution
// Reverse an array, you can't use .reverse()

// 4. Replaced forEach with 'for' loop, added variable for result

'use strict';

const invertArray = (array) => {
  const result = [];
  const arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    result.unshift(array[index]);
  }
  return result;
};

module.exports = invertArray;
