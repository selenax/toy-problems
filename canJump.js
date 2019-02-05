/* eslint-disable func-names */
// input: array of positive numbers
// output: true/false
// edge case: if element is 0 and it's not the last element return false
function canJump(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max < i) return false;

    max = Math.max(nums[i] + i, max);
  }

  return true;
}

// let nums = [2, 3, 1, 1, 5];
// const nums = [3, 2, 1, 0, 4];
// var nums = [2, 3, 1, 1, 4];
// let nums = [0, 1]; //false
// let nums = [1, 2]; //true
// let nums = [0]; //true
// let nums = [1] || [0]; // true
// let nums = [1, 0, 1, 0]; //false
const nums = [2, 5, 0, 0];
console.log(canJump(nums));
