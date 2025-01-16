// Refactor following solution
// Change double quotation to open or close quotation

// 8. Fixed SPACE naming and usage

'use strict';

const SEPARATOR = '';
const QUOTES = {
    OPEN: '«',
    CLOSE: '»',
    STANDARD: '"',
  };

const replaceQuotes = (quote) => {
  const charsBuffer = [];
  let openQuote = true;
  const stringChars = quote.split(SEPARATOR);
  for (let char of stringChars) {
    if (char === QUOTES.STANDARD) {
      const quotation = openQuote ? QUOTES.OPEN : QUOTES.CLOSE;
      openQuote = !openQuote;
      char = quotation;
    }
    charsBuffer.push(char);
  }
  const output = charsBuffer.join(SEPARATOR);
  return output;
};

module.exports = replaceQuotes;
