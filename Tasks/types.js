// Refactor following solution
// Count types in an array

// 4. Removed unused code and unnecessary logic

'use strict';

const countTypes = (array) => {
  const typesCount = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of array) {
    const type = typeof element;
    typesCount[type]++;
  }
  return typesCount;
};

module.exports = countTypes;
