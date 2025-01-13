// Refactor following solution
// Generate random password

// 1. Used linter, prettier, added 'use strict'
'use strict';

let GeneratePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  key = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * MAX);
    key = key + alphabet[Index];
  }
  return key;
};

module.exports = GeneratePassword;
