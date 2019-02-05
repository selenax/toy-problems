/* eslint-disable func-names */
// /* eslint-disable func-names */
const searchRange = function(nums, target) {
  const targetRange = [-1, -1];
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] === target) {
      targetRange[0] = x;
      break;
    }
  }
  if (targetRange[0] === -1) {
    return targetRange;
  }
  for (let y = nums.length - 1; y >= 0; y--) {
    if (nums[y] === target) {
      targetRange[1] = y;
      break;
    }
  }
  return targetRange;
};

// const nums = [1]; // [0,0]
// const nums = [1, 2, 3];
// const nums = [2, 2]; // [0,1]
const nums = [3, 3, 3]; // [0,2]
// const nums = [5, 7, 7, 8, 8, 10];
// console.log(binarySearch(nums, 2, 0, nums.length - 1));
console.log(searchRange(nums, 3));
