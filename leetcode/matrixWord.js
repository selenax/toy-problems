// We need a program that will count the number of occurrences of certain words in a matrix.

// Write a function in the language of your choice that accepts two parameters. The first parameter is a 2-dimensional array of characters, and the second parameter is an array of strings.

// An example would be the following inputs:

// A B X D W H O W
// W O R D S E U W
// O R H W O R D S
// R S E I J E E S
// D E R G H I R K
// S I E P R S E U

let matrixMain = [
  ['A', 'B', 'S', 'C', 'D', 'E'],
  ['F', 'G', 'S', 'G', 'S', 'G'],
  ['A', 'D', 'O', 'H', 'E', 'F'],
  ['D', 'D', 'I', 'G', 'H', 'H'],
  ['E', 'H', 'D', 'O', 'G', 'E'],
  ['X', 'V', 'H', 'O', 'G', 'P']
];

let matrix = [
  'A',
  'B',
  'S',
  'C',
  'D',
  'E',
  'F',
  'G',
  'S',
  'G',
  'S',
  'G',
  'A',
  'D',
  'O',
  'H',
  'E',
  'F',
  'D',
  'D',
  'I',
  'G',
  'H',
  'H',
  'E',
  'H',
  'D',
  'O',
  'G',
  'E',
  'X',
  'V',
  'H',
  'O',
  'G',
  'P'
];
let target = ['WORDS', 'HERE'];

// This should return 5 (3 instances of WORDS, and 2 instances of HERE).

function findOccurrence(matrix, target) {
  let str1 = target[0];
  let str2 = target[1];
  let flatten = matrix.flat(1);

  // let flatten = [].concat(mat)
  console.log(flatten);
}

console.log(findOccurrence(matrix, target));
// const arrays = [['$6'], ['$12'], ['$25'], ['$25'], ['$18'], ['$22'], ['$10']];
// const merge3 = arrays.flat();
// console.log(merge3);
