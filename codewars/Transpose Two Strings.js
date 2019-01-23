//Transpose Two Strings 

// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return:
// H W  
// e o  
// l r  
// l l  
// o d

//input: array of 2 elements 
//output: string displayed vertically 
function transposeTwoStrings (array) {
//create variable for returned str(??);
var str = '';
//loop 5 times (length of each word)
    for(var x = 0; x < array[0].length; x++) {
        //first loop: to get first letter of each string 
        //the next loop need to start a new line 
        str += array[0][x] + ' ' + array[1][x] + '\n';
    }
    return str;
}

console.log(transposeTwoStrings(['Hello','World']));