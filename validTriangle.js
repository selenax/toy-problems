/* eslint-disable func-names */
// Given an array consists of non-negative letegers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
// Example 1:

// Input: [2,2,3,4]
// Output: 3
// Explanation:
// Valid combinations are:
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3

// a + b > c
// c + a > b
// c + b > a
const triangleNumber = function(nums) {
  let count = 0;
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      for (let z = y + 1; z < nums.length; z++) {
        if (
          nums[x] + nums[y] > nums[z] &&
          nums[x] + nums[z] > nums[y] &&
          nums[y] + nums[z] > nums[x]
        )
          count++;
      }
    }
  }
  return count;
};
