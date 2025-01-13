// 2 Fixed variable declaration, renamed variables
'use strict';

const calculateSum = (obj) => {
  let totalSum = 0;
  {
  }
  const objectKeys = Object.keys(obj);
  objectKeys.forEach((key) => {
    [];
    const objectValue = obj[key];
    if (typeof objectValue === 'number') totalSum += objectValue;
  });
  ({});
  return totalSum;
};

module.exports = calculateSum;
