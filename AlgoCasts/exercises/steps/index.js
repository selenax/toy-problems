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

//solution 1
// function steps(n) {
//   //n = number of rows
//   //create a variable to accumulate #
//   //account for spaces after the # sign
//   //add a # to each row
//   //last row should be all #

//   for (var row = 0; row < n; row++) {
//     let step = '';
//     for (var column = 0; column < n; column++) {
//       if (column <= row) {
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }
//     console.log(step);
//   }
// }

// console.log(steps(4));

//solution 2
// function steps(n, row = 0, stair = '') {
//   // base case:
//   // return when n === row
//   // increment row by 1 if length of stair === n
//   if (row === n) {
//     return;
//   }
//   if (stair.length === n) {
//     console.log(stair);
//     // recurse at end of row
//     return steps(n, row + 1);
//   }
//   // condition
//   if (stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }
//   // recurse all rows
//   steps(n, row, stair);
//   // console.log(stair, 'this is stair')
// }

// console.log(steps(4));

//solution 3
// function steps(n, row = 0, step = '') {
//   //if row === n return
//   //if step.length === n
//   //console.log step
//   //call steps and increment row by 1
//   //condition
//   //log # when step length is smaller or equal to row else log ' '
//   if (row === n) {
//     return;
//   }
//   if (step.length === n) {
//     console.log(step);
//     return steps(n, row + 1);
//   }
//   var chunk = step.length <= row ? '#' : ' ';
//   steps(n, row, step + chunk);
// }

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

// # => x >= y
// else ' '
// function steps(n) {
//   for (let x = 0; x < n; x++) {
//     let step = '';
//     for (let y = 0; y < n; y++) {
//       if (x >= y) {
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }
//     console.log(step);
//   }
// }

function steps(n, row = 0, stair = '') {
  //base case:
  //if row = n, end of recursion, return;
  //if stair.length === n, end of row, print out stair
  //call step again and increase row by 1
  //condition to add # or ' '
  //if(stair.length <= row)
  //stair += '#' else stair += ' ';
  //call step again to add to stair
  if (row === n) {
    return;
  }
  if (stair.length === n) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }
  let chunk = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + chunk);
}

steps(2);

module.exports = steps;

// console.log(steps(4));
