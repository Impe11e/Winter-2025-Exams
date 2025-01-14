// Refactor following solution
// Count words in a string

// 5. Changed function logic by using filter

'use strict';

const countWords = (string) => {
  const words = string.trim().split(' ');
  const filterWords = words.filter((word) => Boolean(word));
  const wordsTotal = filterWords.length;
  return wordsTotal;
};

module.exports = countWords;
