// 58. Length of Last Word

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */

//edge case: return 0 if it's emtpy string 
//split the string into individual words
//use array[array.length-1] to get the last word 
//trim out all empty spaces to the right 
//return the length of this last word





var lengthOfLastWord = function(s) {
    if(s.length === 0) {
        return 0;
    }
    var newStr = s.trim().split(' ')
    return newStr[newStr.length-1].length
};

console.log(lengthOfLastWord('a     '))