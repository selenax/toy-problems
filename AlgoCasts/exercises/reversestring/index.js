// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//refactor
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// // //refactor
function reverse(str) {
  let reversed = '';
  for (let char of str) {
    //reversed = A + ''
    //BA = B + A
    //CBA = C + BA
    reversed = char + reversed;
  }
  return reversed;
}

// //refactor
function reverse(str) {
  return str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '');
}

//refactor
function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
