// Refactor following solution
// Change double quotation to open or close quotation

// 5. Changed some of function logic

'use strict';

const SPACE = '';

const replaceQuotes = (quote) => {
  const charsBuffer = [];
  let openQuote = true;
  const stringChars = quote.split('');
  for (let char of stringChars) {
    if (char === '"') {
      const quotation = openQuote ? '«' : '»';
      openQuote = !openQuote;
      char = quotation;
    }
    charsBuffer.push(char);
  }
  const output = charsBuffer.join(SPACE);
  return output;
};

module.exports = replaceQuotes;
