// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = [];
  for (let x = 0; x < n; x++) {
    result.push([]);
  }

  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let count = 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let x = startCol; x <= endCol; x++) {
      result[startRow][x] = count;
      count++;
    }
    startRow++;
    for (let x = startRow; x <= endRow; x++) {
      result[x][endCol] = count;
      count++;
    }
    endCol--;
    for (let x = endCol; x >= startCol; x--) {
      result[endRow][x] = count;
      count++;
    }
    endRow--;
    for (let x = endRow; x >= startRow; x--) {
      result[x][startCol] = count;
      count++;
    }
    startCol++;
  }
  return result;
}

console.log(matrix(5));
module.exports = matrix;
