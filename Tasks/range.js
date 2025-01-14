// Refactor following solution
// Generate int array from given range

// 2. Fixed variable declaration, renamed variables

'use strict';

const convertRange = (...range) => {
  const [from, to] = range;
  if (to >= from) {
    const newRange = new Array(to - from + 1);
    for (let currentNum = from; currentNum <= to; currentNum++) {
      newRange[currentNum - from] = currentNum;
    }
  } else {
    return [];
  }
  return range;
};

module.exports = convertRange;
