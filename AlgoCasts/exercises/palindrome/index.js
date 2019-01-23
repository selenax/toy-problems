// // --- Directions
// // Given a string, return true if the string is a palindrome
// // or false if it is not.  Palindromes are strings that
// // form the same word if it is reversed. *Do* include spaces
// // and punctuation in determining if the string is a palindrome.
// // --- Examples:
// //   palindrome("abba") === true
// //   palindrome("abcdefg") === false

// function palindrome(str) {
//   var reversed = str
//     .split('')
//     .reverse()
//     .join('');
//   return reversed === str;
// }

//refactor
function palindrome(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

//refactor
function palindrome(str) {
  var newStr = str.split('');
  return str.split('').every((char, index) => {
    return char === newStr.pop();
  });
}

console.log('abbcx'.split('').pop());

console.log(palindrome('abba'));
// console.log(palindrome('abcdefg'));

module.exports = palindrome;
