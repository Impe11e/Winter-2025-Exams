// 5 Improved code by using Object.values instead of Object.keys
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
