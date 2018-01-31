// 26. Remove Duplicates from Sorted Array

// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.






//In-place algorithm updates input sequence only through replacement or swapping of elements
    //don't create new array 
    var removeDuplicates = function(nums) {
        var count = 0;
        if(nums.length === 1) {
            return 1;
        }
        if(nums.length === 0) {
            return 0;
        }
        for(var x = 0; x < nums.length; x++) {
            if(nums[x] !== nums[x+1]){
                count++;
                nums[count] = nums[x+1];
                
            }
        }
        return count;
    }

nums = [1,1,2]
console.log(removeDuplicates(nums));
                           