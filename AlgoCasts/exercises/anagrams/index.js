// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ignore uppercases, punctuations, spaces

function anagrams(stringA, stringB) {

  const str1 = count(stringA);
  const str2 = count(stringB);
  if(Object.keys(str1).length !== Object.keys(str2).length) {
    return false;
  }
  for (let key in str1) {
    if (str1[key] !== str2[key]) {
      return false;
    }
  }
  return true;
}

function count(str) {
  let obj = {};
  for (const x of str.replace(/[^\w]/g, '').toLowerCase()) {
    obj[x] = obj[x] + 1 || 1;
  }
  return obj;
}


//refactor
function anagrams(stringA, stringB) {
  return sortChar(stringA) === sortChar(stringB);
}

function sortChar(str) {
  return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}




console.log(sortChar('ad!gef'))
console.log(count('beebee'))
console.log(anagrams('rail safety', 'fairy tales'));

module.exports = anagrams;
