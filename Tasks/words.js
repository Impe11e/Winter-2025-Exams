// Refactor following solution
// Count words in a string

// 2. Replaced function expression with arrow function

'use strict';

Words = (s) => {
  number_of_words_in_s = 0;
  flag = false;
  for (c of s) {
    if (!flag) {
      if (c === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
        number_of_words_in_s++;
      }
    } else {
      if (c === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
      }
    }
  }
  return number_of_words_in_s;
};

module.exports = Words;
