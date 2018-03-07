//Big Flipper

// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example'; 
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma


function flipEveryNChars (str, n) {
  var reversedStr = '';
  for(var x = 0; x < str.length; x+=n) {
    var nthLetter = str.substr(x, n);
    reversedStr += nthLetter.split('').reverse().join('');
    console.log(reversedStr);
  }
  return reversedStr;

}

console.log(output);

function assertEqual (actual, expected, testName) {
  if(actual === expected) {
    console.log('passed');
  } else {
    console.log('Failed, ' + testName + 'Expected ' + expected + ' but got ' + actual);
  }
}

var actual = flipEveryNChars(input, 5);
var expected = 'ohs axe trelpma';
assertEqual(actual, expected, 'should flip at 5th letter');