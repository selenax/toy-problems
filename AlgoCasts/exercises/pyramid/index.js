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
//N is number of row
//console log '#' to form pyramid 
//median defines how many columns
//condition
  //log # if median - row <= column && median + row >= column 
    //IE: 1 <= median >= 3
const median = Math.floor((n*2-1)/2); 
for(var row = 0; row < n; row++) {
  let stair = '';
  for(var column = 0; column < n*2-1; column++) {
    if(median - row <= column && median + row >= column) {
      stair += '#'
    } else {
      stair += ' '
    }
  }
  console.log(stair)
}
}

console.log(pyramid(3))


//solution 2
function pyramid(n, row = 0, level = '') {
  //N is number of row
//console log '#' to form pyramid 
//median defines how many columns
//condition
  //log # if median - row <= column && median + row >= column 
    //IE: 1 <= median >= 3
  const median = Math.floor((n*2-1)/2);
  if(row === n) { return; }
  if(level.length === (n * 2 -1)) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  //condition
  if(median - row <= level.length && median + row >= level.length) {
    level += '#';
  } else {
    level += ' ';
  }
  pyramid(n, row, level)
}


console.log(pyramid(3));


module.exports = pyramid;
