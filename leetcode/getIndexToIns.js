// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

//input: array and integer
//output: smallest index
//insert in order, find the first value larger than second parameter, return that index
//edge
//return 0 if empty array
//if num is > value in array, return arr length
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  if (!arr[0]) return 0;
  if (arr[arr.length - 1] < num) { return arr.length; }
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] >= num) {
      return x;
    }
  }
}

//refactor

//find index where first element is bigger than num
function getIndexToIns(arr, num) {
  arr.push(num)
  return arr.sort((a,b) => a-b).indexOf(num)
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// console.log(getIndexToIns([5, 3, 20, 3], 5));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
// console.log(getIndexToIns([3, 30, 30, 30], 30))
// console.log(getIndexToIns([2, 5, 10], 15))
// [3, 3, 5, 20] 5
