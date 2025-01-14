// Refactor following solution
// Change double quotation to open or close quotation

// 6. moved quotes '«', '»' and '"' into constants

'use strict';

const SPACE = '';
const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';
const QUOTE = '"';

const replaceQuotes = (quote) => {
  const charsBuffer = [];
  let openQuote = true;
  const stringChars = quote.split('');
  for (let char of stringChars) {
    if (char === QUOTE) {
      const quotation = openQuote ? OPEN_QUOTE : CLOSE_QUOTE;
      openQuote = !openQuote;
      char = quotation;
    }
    charsBuffer.push(char);
  }
  const output = charsBuffer.join(SPACE);
  return output;
};

module.exports = replaceQuotes;
