// Refactor following solution
// Sum all number values in dict

// 6 Improved problem with indents and added a task condition

'use strict';

const calculateSum = (obj) => {
  let totalSum = 0;
  const objectValues = Object.values(obj);
  for (const value of objectValues) {
    if (typeof value === 'number') {
      totalSum += value;
    }
  }
  return totalSum;
};

module.exports = calculateSum;
