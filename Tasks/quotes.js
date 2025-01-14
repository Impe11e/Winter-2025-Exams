// Refactor following solution
// Change double quotation to open or close quotation

// 7. moved quotes into summary object

'use strict';

const SPACE = '';
const QUOTES = {
    OPEN: '«',
    CLOSE: '»',
    STANDARD: '"',
  };

const replaceQuotes = (quote) => {
  const charsBuffer = [];
  let openQuote = true;
  const stringChars = quote.split('');
  for (let char of stringChars) {
    if (char === QUOTES.STANDARD) {
      const quotation = openQuote ? QUOTES.OPEN : QUOTES.CLOSE;
      openQuote = !openQuote;
      char = quotation;
    }
    charsBuffer.push(char);
  }
  const output = charsBuffer.join(SPACE);
  return output;
};

module.exports = replaceQuotes;
