// Refactor following solution
// Generate random password

// 4. Fixed some variable naming

'use strict';

const generatePassword = (alphabet, length) => {
  const MAX_INDEX = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * MAX_INDEX);
    password += alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
