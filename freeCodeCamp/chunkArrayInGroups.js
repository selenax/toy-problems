
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//input: array
//output: 2d array with length of size 

function chunkArrayInGroups(arr, size) {
let output = [];
  for(let x = 0; x < arr.length; x+=size) {
    output.push(arr.slice(x, size+x))

  }
  return output;
}


//refactor
function chunkArrayInGroups(arr, size) {
  let result = [];
  let i = 0;
  while(i < arr.length) {
    result.push(arr.slice(i, i+size))
    i+=size;
  }

return result;

}

//recursion 
function chunkArrayInGroups(arr, size) {
  //base case: exit out when the arr has less elements than the size
  if(arr.length <= size) {
    return [arr]
  }
  //slice array to proper size, call function and pass in remaining elements
    //concat each subarray and recurse til remaining element is less than size, return so it can be concat with the rest. 
  return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size))
}



console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));