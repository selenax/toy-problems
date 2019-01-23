
// Flip N characters in String 


// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example!'; 
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'



//substr(start, length)

//every n letter, reverse those letters 

function flipEveryNChars (str, n) {
    var newStr = '';
    for(var x = 0; x < str.length; x+=n) {
        newStr += str.substr(x,n).split('').reverse().join('')
    }
    return newStr;
}
console.log(flipEveryNChars('a short example', 5));