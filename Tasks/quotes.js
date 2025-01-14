// Refactor following solution
// Change double quotation to open or close quotation

// 4. Removed unused code and unnecessary logic

'use strict';

const SPACE = '';

const replaceQuotes = (quote) => {
  const charsBuffer = [];
  let openQuote = false;
  for (const char of quote) {
    if (char === '"') {
      if (!openQuote) {
        charsBuffer.push('«');
        openQuote = true;
      } else {
        charsBuffer.push('»');
        openQuote = false;
      }
    } else {
      charsBuffer.push(char);
    }
  }
  return charsBuffer.join(SPACE);
};

module.exports = replaceQuotes;
