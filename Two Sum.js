// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// NOTE: solution 1 - O(n^2) quadratic nested loop
// var twoSum = function(nums, target) {
//   for (var x = 0; x < nums.length; x++) {
//     for (var y = x + 1; y < nums.length; y++) {
//       console.log(nums[x], nums[y]);
//       if (nums[x] + nums[y] === target) {
//         return [x, y];
//       }
//     }
//   }
// };

// var nums = [2, 7, 11, 15];

// console.log(twoSum(nums, 17)); //[ 0, 3 ]

// NOTE: solution 2 - O(n log n), O(1) memory (not counting the list):
// First, sort the list. This should take O(n log n) time, as most sort functions do.
// Iterate through the list, which should take O(n) time in the outer loop. At this point you can do a binary search for the closest matching integer in a sorted sublist, which should take O(log n) time. This stage should wind up taking O(n log n) total.

// NOTE: solution 3 (fastest) - O(n) time, O(n) memory
// We only need to loop through the array once, resulting in a running time of O(n) since each lookup and insertion in a hash table is O(1).
// Build a hash table, which should have O(1) insertion and O(1) contains. Then, in a  O(n) outer loop, for each number i, check if total - i is in the hash table. If not, add it; if so, then you've got your two numbers.
// Either way, you would need an additional scan through the array to get the indices, but that's no problem--it only takes O(n)
function twoSum(arr, S) {
  var sums = [];
  var hashTable = {};

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
    var sumMinusElement = S - arr[i];
    console.log(sumMinusElement);

    if (hashTable[sumMinusElement] !== undefined) {
      console.log(sumMinusElement);
      sums.push([arr[i], sumMinusElement]);
      console.log(sums);
    }

    hashTable[arr[i]] = arr[i];
    console.log((hashTable[arr[i]] = arr[i]));
  }

  // return all pairs of integers that sum to S
  return sums;
}

console.log(twoSum([3, 5, 2], 7));
