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

// function pyramid(n) {
// //N is number of row
// //console log '#' to form pyramid
// //median defines how many columns
// //condition
//   //log # if median - row <= column && median + row >= column
//     //IE: 1 <= median >= 3
// const median = Math.floor((n*2-1)/2);
// for(var row = 0; row < n; row++) {
//   let stair = '';
//   for(var column = 0; column < n*2-1; column++) {
//     if(median - row <= column && median + row >= column) {
//       stair += '#'
//     } else {
//       stair += ' '
//     }
//   }
//   console.log(stair)
// }
// }

// console.log(pyramid(3))

//solution 2
// function pyramid(n, row = 0, level = '') {
//   //N is number of row
// //console log '#' to form pyramid
// //median defines how many columns
// //condition
//   //log # if median - row <= column && median + row >= column
//     //IE: 1 <= median >= 3
//   const median = Math.floor((n*2-1)/2);
//   if(row === n) { return; }
//   if(level.length === (n * 2 -1)) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }
//   //condition
//   if(median - row <= level.length && median + row >= level.length) {
//     level += '#';
//   } else {
//     level += ' ';
//   }
//   pyramid(n, row, level)
// }

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

//column = (n*2)-1
//0: **#**
//1: *###*
//2: #####
//at each iteration, midpoint incease by 1 # on left and right side
// function pyramid(n) {
//   let midpoint = Math.floor((n * 2 - 1) / 2);
//   console.log(midpoint);
//   for (let x = 0; x < n; x++) {
//     let step = '';
//     for (let y = 0; y < n * 2 - 1; y++) {
//       if (midpoint + x >= y && midpoint - x <= y) {
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }
//     console.log(step);
//   }
// }

function pyramid(n, row = 0, stair = '') {
  let midpoint = Math.floor((n * 2 - 1) / 2);
  let column = n * 2 - 1;

  //n === row; return
  //stair.length === column; call pyramid again, increase row by 1

  //if midpoint + row >= stair.length && midpiont - row <= stair.length
  //stair += # else ' '
  if (n === row) {
    return;
  }
  if (stair.length === column) {
    console.log(stair);
    pyramid(n, row + 1);
  }
  let chunk =
    midpoint + row >= stair.length && midpoint - row <= stair.length
      ? '#'
      : ' ';
  pyramid(n, row, stair + chunk);
}

console.log(pyramid(3));

module.exports = pyramid;
