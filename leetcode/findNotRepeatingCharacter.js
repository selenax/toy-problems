// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string that contains only lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s.length ≤ 105.

// [output] char

// The first non-repeating character in s, or '_' if there are no characters that do not repeat.

// console.time();
function firstNotRepeatingCharacter(s) {
  let letter = {};
  for (let x of s) {
    if (letter[x]) {
      letter[x]++;
    } else {
      letter[x] = 1;
    }
  }
  for (let [x, y] of Object.entries(letter)) {
    if (y === 1) {
      return x;
    }
  }
  return '_';
}
console.log(firstNotRepeatingCharacter('abacabad'));
// console.timeEnd();

//refactor with indexOf for faster execution time
// console.time();
function firstNotRepeatingCharacter(string) {
  for (let x = 0; x < string.length; x++) {
    let letter = string[x];
    if (string.indexOf(letter) === x && string.indexOf(letter, x + 1) === -1) {
      return letter;
    }
  }
  return '-';
}
console.log(firstNotRepeatingCharacter('abacabad'));
console.timeEnd();

// console.log(firstNotRepeatingCharacter('abacabad'));
