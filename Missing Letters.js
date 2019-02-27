// Missing Letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.  

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var ascii = str.charCodeAt(i);
    console.log(ascii)
    if (ascii !== str.charCodeAt(0) + i) {
    return String.fromCharCode(ascii - 1);
      }
    }
return undefined;
}


console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"))