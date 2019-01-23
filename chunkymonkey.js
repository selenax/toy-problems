// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  let subArray = [];
  let result = [];
  for(let x = 0; x < arr.length; x++) {
    //condition to push only size amount of element in subarray 
    subArray.push(arr[x])
    //once size met, push to result, reset subArray to empty array 
    if(subArray.length === size) {
      result.push(subArray);
      subArray = [];
    }
  }
  //push any remaining values 
  if(subArray.length !== 0) {
    result.push(subArray)
  }
  return result;
}


//refactor
function chunkArrayInGroups(arr, size) {
  let subArray = [];
  //increment x by size 
  for(let x = 0; x < arr.length; x+=size) {
    //push using slice 
    subArray.push(arr.slice(x, x+size))
  }
  return subArray;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].