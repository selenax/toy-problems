// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function largestOfFour(arr) {
  // You can do this!
  let result = [];
  for(let x = 0; x < arr.length; x++) {
    result.push(largest(arr[x]))
  }
  return result;
}

function largest(array) {
  return array.reduce((accum, curr) => Math.max(accum, curr))
}

// refactor
function largestOfFour(arr) {
  return arr.map((subArr) => 
  subArr.reduce((accum, curr) => (accum > curr) ? accum : curr
  ))
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));