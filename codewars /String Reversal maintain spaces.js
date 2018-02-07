//Simple string reversal while maintaining spaces 

// In this Kata, we are going to reverse a string while maintaining spaces.

//reverse the string, take out all the spaces 
//loop through original string 
    //if its not a space, push a letter from reversed string
    //if it's a space, push space 

function solve(str){
    //how to maintain space??
        var reversed = str.split('').reverse().filter(el => el !== ' ');
        console.log(reversed)
        var string = [];
        for(var x = 0; x < str.length; x++) {
            if(str[x] !== ' ') {
                string.push(reversed.shift());
            } else {
                string.push(' ');
            }
        }
        return string.join('')
    }

console.log(solve("i love codewars"))

//"s rawe docevoli"