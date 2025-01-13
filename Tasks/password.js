// Refactor following solution
// Generate random password

// 2. Fixed variable declaration, renamed variables

'use strict';

const GeneratePassword = (alphabet, length) => {
  const MAX_INDEX = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * MAX_INDEX);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = GeneratePassword;
