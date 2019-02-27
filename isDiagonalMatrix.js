// Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).

//Example:
// [
//  [1, 0, 0],
//  [0, 2, 0],
//  [0, 0, 3]
// ] = true

// [[1, 0, 0], [0, 2, 3], [0, 0, 3] ] = false

//
function isDiagonalMatrix(matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      if (x !== y && matrix[x][y] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(isDiagonalMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));


console.log(Math.floor(10/3), 10)