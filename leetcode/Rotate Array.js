// Rotate Array 

// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
var arr = [1,2,3,4,5,6,7];

var rotate = function(nums, k) {
    for(var x = 0; x < k; x++) {
      // console.log(nums);
      nums.unshift(nums.pop());
    }
  }
  
  rotate(arr,3)
  console.log(arr)
  