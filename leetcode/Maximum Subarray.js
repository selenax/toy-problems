// 53. Maximum Subarray
// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.



var maxSubArray = function(nums) {
    var currentSum = totalSum = nums[0];
    for(var i=1; i<nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum+nums[i])
        totalSum = Math.max(totalSum, currentSum)
    }
    return totalSum;
};