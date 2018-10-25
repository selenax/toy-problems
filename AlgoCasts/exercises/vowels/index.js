// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  var result = str.match(/[aeiou]/gi);
  return result ? result.length : 0;
}


// refactor
function vowels(str) {
  let count = 0;
  const vowel = 'aeiou';

  for (let char of str.toLowerCase()) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}


// vowels('Why?');
console.log(vowels('Why do you ask?'));

module.exports = vowels;
