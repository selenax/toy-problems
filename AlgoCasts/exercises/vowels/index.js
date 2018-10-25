// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  var vowel = /[aeiouAEIOU]/g;
  var result = str.match(vowel);
  if (result === null) { 
    return 0;
  }
  return result.length;
}

// vowels('Why?') 

module.exports = vowels;
