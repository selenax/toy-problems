
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//input: array
//output: 2d array with length of size 

function chunkArrayInGroups(arr, size) {
let output = [];
  for(let x = 0; x < arr.length; x+=size) {
    output.push(arr.slice(x, size))

  }
  return output;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));