// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let reverse = '';
//   if (n < 0) {
//     let str = n.toString();
//     for (var x = 1; x < str.length; x++) {
//       reverse = reverse + str[str.length - x];
//       console.log(reverse);
//     }
//     return reverse * -1;
//   } else {
//     str = n
//       .toString()
//       .split('')
//       .reverse()
//       .join('');
//   }
//   return Number(str);
// }

// //refactor
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
  console.log(reversed);
  return parseInt(reversed) * Math.sign(n);
}

// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//input: integer: positive or negative
// //output: reversed order of input, keeping negative sign in place
// function reverseInt(n) {
//   let reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//   return reversed * Math.sign(n);
// }

//input: negative/positive integer
//output: negative/positive reversed input

function reverseInt(n) {
  let reverse = n
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(reverse) * Math.sign(n);
}
console.log(reverseInt(0));
console.log(reverseInt(-5));
console.log(reverseInt(-90));
console.log(reverseInt(-2359));
module.exports = reverseInt;
