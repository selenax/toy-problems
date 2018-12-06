// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

//if all letter in second element is in first element return true : false
//ignore all cases
//order of letter shouldnt matter
// function mutation(arr) {
//   let flag = true;
//   //loop over 2nd word, indexof to check
//   //create flag to keep track
//   arr[0] = arr[0].toLowherCase();
//   arr[1] = arr[1].toLowerCase();
//   for (let x = 0; x < arr[1].length; x++) {
//     console.log(x);
//     if (arr[0].indexOf(arr[1][x]) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

//refactor
function mutation(arr) {
  return arr[1].toLowerCase().split('').every((letter) => arr[0].toLowerCase().indexOf(letter) !== -1 )
}

console.log(mutation(['hello', 'hello']));
