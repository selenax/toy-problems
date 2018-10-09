// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {
  for (let x = 0; x < n; x++) {
    let result = '';
    for (let y = 0; y < n; y++) {
      if (x >= y) {
        result += '#';
      } else {
        result += ' ';
      }
      // console.log(result, 'result')
    }
    console.log(result);
  }
}

//refactor
function steps(n, row = 0, result = '') {
// base case
  // print at every iteration when column length === n
  // return out of function when row === n
// row <= col, print # else print ''
  if (row === n) {
    return;
  }
  if (result.length === n) {
    console.log(result);
    // recurse at end of each row
    return steps(n, row + 1);
  }
  if (result.length <= row) {
    result += '#';
  } else {
    result += ' ';
  }
  // recurse through all the rows
  steps(n, row, result);
}


//refactor
function steps(n, row = 0, result = '') {
  if (row === n) {
    return;
  }
  if (result.length === n) {
    console.log(result);
    // recurse at end of each row
    return steps(n, row + 1);
  }
  var chunk = result.length <= row ? '#' : ' ';
  steps(n, row, result + chunk)

}
console.log(steps(3));

module.exports = steps;
