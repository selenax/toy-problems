
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


// fearNotLetter("abce") should return "d".
// Passed
// fearNotLetter("abcdefghjklmno") should return "i".
// Passed
// fearNotLetter("stvwx") should return "u".
// Passed
// fearNotLetter("bcdf") should return "e".
// Passed
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.



// 98 b 
// 99 c
// 101 e
function fearNotLetter(str) {
  for(let x = 0; x < str.length; x++) {
    if(str.charCodeAt(x+1) - str.charCodeAt(x) > 1) {
      return String.fromCharCode(str.charCodeAt(x) + 1)
    }
  }
}

fearNotLetter("abce");