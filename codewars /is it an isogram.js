// is it an isogram

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.

// Write and test a function that determines whether a string is an isogram.

// Notes:
// * Assume your input is only letters.
// * Assume the empty string is an isogram. 
// * Ignore case.
// * Follow the pseudocode exactly!

function isIsogram(text) {
    text = text.toLowerCase();
    if(text.length === 0) {
        return true;
    }
    var newText = new Set(text);
    console.log(newText)
    return newText.size === text.length;
}

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('aba'))
console.log(isIsogram('fleEcy'))