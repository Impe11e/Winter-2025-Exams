// Refactor following solution
// Generate int array from given range

// 1. Used linter, prettier, added 'use strict'

'use strict';

convertRange = (...Range) => {
  let [from, to] = Range;
  if (to >= from) {
    Range = new Array(to - from + 1);
    for (let i = from; i <= to; i++) {
      Range[i - from] = i;
    }
  } else {
    return [];
  }
  return Range;
};

module.exports = _range;
