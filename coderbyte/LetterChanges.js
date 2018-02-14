// Challenge
// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
// Sample Test Cases
// Input:"hello*3"

// Output:"Ifmmp*3"


// Input:"fun times!"

// Output:"gvO Ujnft!"

// function LetterChanges (str) {
//     var result = ''
//     var newStr = '';
//     var letters = /[A-Ya-y]/gi;
//     var vowel = /[aeiou]/gi;
//     for(var x = 0; x < str.length; x++) {
//         if(str[x].match(letters)) {
//           newStr += String.fromCharCode(str.charCodeAt(x)+1)
//         } else if (str[x] === 'z') {
//             newStr += 'a';
//         } else if (str[x] === 'Z') {
//             newStr += 'A';
//         } else {
//             newStr += str[x];
//         }

//     }
//     for(var y = 0; y < newStr.length; y++) {
//         if(newStr[y].match(vowel)) {
//             result += newStr[y].toUpperCase();
//         } else {
//             result += newStr[y];
//         }
//     }
//     return result;
// }

// console.log(LetterChanges("hellozzz*3"))
// console.log(LetterChanges("fun timez!"))


// replace each letter with the letter after; z -> a 
// replace aeiou to capitals 
function LetterChanges(str) {
    var newStr = str.replace(/[a-z]/gi, function(char){
        return (char === 'z' || char === 'Z' ? 'a' : String.fromCharCode(char.charCodeAt()+1));
    });
    return newStr.replace(/[aeiou]/gi, function(char) {
        return char.toUpperCase();
    });
}

console.log(LetterChanges("hellozzz*3")) 
console.log(LetterChanges("fun timez!"))