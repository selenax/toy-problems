// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
  //find index of first true statment
  let range = arr.length;
  for (let x = 0; x < range; x++) {
    console.log(range);
    if (func(arr[x])) {
      break;
    }
    arr.shift();
  }
  return arr;
}

//refactor
function dropElements(arr, func) {
  //find index of first true statment
  for (let x = 0; x < arr.length; x++) {
    if (func(arr[x])) {
      return arr.slice(x);
    }
  }
  return [];
}
console.log(
  dropElements([1, 2, 3], function(n) {
    return n < 3;
  })
);

console.log(
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  })
);
// should return [3, 4].
// Passed
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// Passed
// dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
// Passed
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// Passed
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
