// Refactor following solution
// Generate int array from given range

// 5. Removed unnecessary destructuring

'use strict';

const convertRange = (from, to) => {
  if (to >= from) {
    const arraySize = to - from + 1;
    const newRange = new Array(arraySize);
    for (let currentNum = from; currentNum <= to; currentNum++) {
      const index = currentNum - from;
      newRange[index] = currentNum;
    }
    return newRange;
  } else {
    return [];
  }
};

module.exports = convertRange;
