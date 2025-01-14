// Refactor following solution
// Generate int array from given range

// 3. moved the array size into a separate variable

'use strict';

const convertRange = (...range) => {
  const [from, to] = range;
  if (to >= from) {
    const arraySize = to - from + 1;
    const newRange = new Array(arraySize);
    for (let currentNum = from; currentNum <= to; currentNum++) {
      newRange[currentNum - from] = currentNum;
    }
  } else {
    return [];
  }
  return range;
};

module.exports = convertRange;
