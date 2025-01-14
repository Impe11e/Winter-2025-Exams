// Refactor following solution
// Change double quotation to open or close quotation

// 2. Replaced function expression with arrow function

'use strict';

const EMPTY = '';

quotes = (s) => {
  res = [];
  open = false;
  for (c of s) {
    if (c === '"') {
      for (i of c) {
        if (!open) {
          res.push('«');
          open = true;
        } else {
          res.push('»');
          open = false;
        }
      }
    } else {
      if (c !== '"') {
        for (i of c) {
          res.push(i);
        }
      }
    }
  }
  return res.join(EMPTY);
};

module.exports = quotes;
