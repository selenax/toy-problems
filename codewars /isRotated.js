// oh yeah? Rotate THIS

// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'

//hint If you double the string, you'll be to trivially find another string inside it using regular String methods.
// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w  



function isRotated(str1, str2) {
    var doubleStr = str1.concat(str2);
    return doubleStr.indexOf(str1) !== -1;
    
  }