//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// brute force
function twoSum (nums, target) {
  for(let x = 0; x < nums.length; x++) {
      for(let y = x + 1; y < nums.length; y++) {
          if(nums[x] + nums[y] === target) {
              return [x, y];
          }
      }
  }
};

// refactor: 
function twoSum (nums, target) {
  let hash = {};
  for(let x = 0; x < nums.length; x++) {
      if(hash[nums[x]] !== undefined) {
          return [hash[nums[x]], x]
      } else {
          hash[target - nums[x]] = x;
      }
  }
};