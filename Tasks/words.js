// Refactor following solution
// Count words in a string

// 6. added SEPARATOR const

'use strict';

const SEPARATOR = ' ';

const countWords = (string) => {
  const words = string.trim().split(SEPARATOR);
  const filterWords = words.filter((word) => Boolean(word));
  const wordsTotal = filterWords.length;
  return wordsTotal;
};

module.exports = countWords;
