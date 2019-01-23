// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const obj = {};
//   let max = 0;
//   let maxChar = '';
//   for (let char of str) {
//     if (obj[char]) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }
//   for (let key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//       maxChar = key;
//     }
//   }
//   return maxChar;
// }

function maxChar(str) {
  let hash = {};
  for (let char of str) {
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }
  //object entries return a 2d  => [[key,value], [key, value]]
  //sort array by value, return first element since it will have the highest value
  let max = Object.entries(hash).sort((a, b) => b[1] - a[1])[0];
  //return the key
  return max[0];
}
console.log(maxChar('abcccccccd'));

module.exports = maxChar;
