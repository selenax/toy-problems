
// 344. Reverse String


// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".



var reverseString = function(s) {
    var str = '';
    for(var x = s.length-1; x >=0; x--) {
        str += s[x];
    }
    return str;
};