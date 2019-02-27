//136. Single Number


// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?



/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var obj = {};
    for(var x = 0; x < nums.length; x++) {
        var number = nums[x];
        if(obj[number]) {
            obj[number]++;
        } else {
            obj[number] = 1;
        }
    }
    for(var key in obj) {
        if(obj[key] !== 2) {
            return Number(key);
        }
    }
};

