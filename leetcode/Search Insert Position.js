// 35. Search Insert Position

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 1:

// Input: [1,3,5,6], 0
// Output: 0


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//input: sorted array 
//output: index of target 

//if target is in array, return its index
//if target is not in array, return index of where it should be in the sorted array 
    //compare the target with numbers in array - divide array in half? 
    //condition to be met: x1 < target < x2 
var searchInsert = function(nums, target) {
    var num = 0;
    for(var x = 0; x < nums.length; x++) {
        if(nums[x] === target) {
            return x;
        } else if ((nums[x] < target) && (target < nums[x+1])) {
            return x+1;
        } else if (nums[nums.length-1] < target) {
            return (nums.length);
        } else if (target < nums[0]) {
            return 0;
        }
    }
    
};

var nums = [1,3,5,6]
var target = 0;
console.log(searchInsert(nums, target))