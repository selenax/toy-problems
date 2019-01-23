// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

//input: a string of all uppercase
//output: a string transformed with each letter shifted 13 places && keep any non-alphabetic character(ie spaces, punctuation)

function rot13(str) {
  //split string into individual words
  //ascii uppercase 65-90(inclusive)
  return str
    .split('')
    .map(function(char) {
      let x = char.charCodeAt();
      //return all char that won't be converted
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      } else if (x <= 77) {
        return String.fromCharCode(x + 13);
      } else {
        return String.fromCharCode(x - 13);
      }
    })
    .join('');
}

//refactor
function rot13(str) {
  return str.replace(/[A-Z]/g, char =>
    String.fromCharCode((char.charCodeAt() % 26) + 65)
  );
}

console.log(90 % 26);
// console.log(rot13("SERR PBQR PNZC"));
console.log(rot13('CVMMN!'));
// Change the inputs below to test
// rot13("SERR PBQR PNZC");

// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
// rot13("SERR CVMMN!") should decode to FREE PIZZA!
// rot13("SERR YBIR?") should decode to FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
