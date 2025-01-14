// Refactor following solution
// Count words in a string

// 4. Removed unnessesary if-statement logic

'use strict';

const countWords = (string) => {
  let wordsTotal = 0;
  let inWord = false;
  for (const char of string) {
    if (!inWord) {
      if (char === ' ') {
        inWord = false;
      } else {
        inWord = true;
        wordsTotal++;
      }
    } else if (char === ' ') {
      inWord = false;
    }
  }
  return wordsTotal;
};

module.exports = countWords;
