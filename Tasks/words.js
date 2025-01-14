// Refactor following solution
// Count words in a string

// 3. Fixed variable declaration, renamed variables

'use strict';

const countWords = (string) => {
  let wordsTotal = 0;
  let inWord = false;
  for (const char of string) {
    if (!inWord) {
      if (char === ' ') {
        if (inWord === true) {
          inWord = false;
        } else {
          inWord = false;
        }
      } else {
        if (inWord === true) {
          inWord = true;
        } else {
          inWord = true;
        }
        wordsTotal++;
      }
    } else {
      if (char === ' ') {
        if (inWord === true) {
          inWord = false;
        } else {
          inWord = false;
        }
      } else {
        if (inWord === true) {
          inWord = true;
        } else {
          inWord = true;
        }
      }
    }
  }
  return wordsTotal;
};

module.exports = countWords;
