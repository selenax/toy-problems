// Interview Cake

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

let str =
  'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';

//NOTE: O(N) &* O(1) space
function getClosingParen(sentence, openingParenIndex) {
  console.log(sentence[10]);
  let last;
  for (let x = sentence.length - 1; x >= 0; x--) {
    if (sentence[x] === ')') {
      last = x;
      break;
    }
  }
  return last || null;
}

console.log(getClosingParen(str, 10));
console.log(getClosingParen('This ( is great!', 5));
