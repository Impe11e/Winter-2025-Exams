// Refactor following solution
// Change double quotation to open or close quotation

// 3. Fixed variable declaration, renamed variables
'use strict';

const SPACE = '';

const replaceQuotes = (quote) => {
  const charsBuffer = [];
  let openQuote = false;
  for (const char of quote) {
    if (char === '"') {
      for (i of char) {
        if (!openQuote) {
          charsBuffer.push('«');
          openQuote = true;
        } else {
          charsBuffer.push('»');
          openQuote = false;
        }
      }
    } else {
      if (char !== '"') {
        for (i of char) {
          charsBuffer.push(i);
        }
      }
    }
  }
  return charsBuffer.join(SPACE);
};

module.exports = replaceQuotes;
