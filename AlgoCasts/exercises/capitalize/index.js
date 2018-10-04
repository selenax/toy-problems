// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = str.toLowerCase().split(' ');
  console.log(words);
  const result = [];
  for (const word of words) {
    result.push(toUpper(word));
  }
  return result.join(' ');
}

function toUpper(str) {
  return str[0].toUpperCase() + str.slice(1);
}


console.log(toUpper('deg3we'));
console.log(capitalize('a short sentence'));


module.exports = capitalize;
