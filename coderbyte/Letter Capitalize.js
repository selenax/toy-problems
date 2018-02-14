// Letter Capitalize 

//Capitize first letter of each word in string


var string = 'arg goes here';


function LetterCapitalize(str) { 

    function capLetters(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
    var newStr = str.split(' ').map(capLetters);
     return newStr.join(' ');
}

console.log(LetterCapitalize(string))

