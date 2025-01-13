// 4 Replaced forEach function with for...of
'use strict';

const calculateSum = (obj) => {
  let totalSum = 0;
  const objectKeys = Object.keys(obj);
  for (const key of objectKeys) {
    const value = obj[key];
    if (typeof value === 'number') {
      totalSum += value;
    }
  }
  return totalSum;
};

module.exports = calculateSum;
