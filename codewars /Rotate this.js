
// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'


// If you double the string, you'll be to trivially find another string inside it using regular String methods.

// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w    '


function rotated (str1, str2) {
  var doubleStr = str1.concat(str1);        
  console.log(doubleStr);
  return doubleStr.indexOf(str2) !== -1;      //check to see if return true;
}

console.log(rotated('hello world', 'orldhello w'));