// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

//NOTE: HARD
const findMedianSortedArrays = function(nums1, nums2) {
  let combined = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log(combined);
  let median = combined.length / 2;
  if (combined.length % 2 === 0) {
    median = (combined[median] + combined[median - 1]) / 2;
  } else {
    median = combined[Math.floor(median)];
  }
  return median;
};

// console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([3], [-2, -1]));
