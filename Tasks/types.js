// Refactor following solution
// Count types in an array

// 3. Fixed variable declaration, renamed variables

'use strict';

const countTypes = (array) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of array) {
    const type = typeof element;
    types[type]++;
  }
  array.push('string');
  return types;
  array.length;
};

module.exports = countTypes;
