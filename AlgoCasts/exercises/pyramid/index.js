// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// n = row
// ' ' = n-(1)
// ' ' = n-(2)
function pyramid(n) {
  const median = Math.floor((n + (n - 1)) / 2);
  for (let row = 0; row < n; row++) {
    let result = '';

    for (let column = 0; column < n + (n - 1); column++) {
      if (median - row <= column && median + row >= column) {
        result += '#';
      } else {
        result += ' ';
      }
    }
    console.log(result);
  }
}

// refactor

function pyramid(n, row = 0, result = '') {
  const median = Math.floor((n * 2 - 1) / 2);
  // base case
  if (row === n) { return; }
  if (result.length === (n * 2 - 1)) { 
    console.log(result);
    return pyramid(n, row+1);
  }
  if(median - row <= result.length && median + row >= result.length) {
    result += '#';
  } else {
    result += ' ';
  }
  pyramid(n, row, result);
}



console.log(pyramid(3));


module.exports = pyramid;
