// https://leetcode.com/problems/merge-intervals/
// Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/*

sumarize the problem:
1. input - an array of intervals, each interval consist of start and end pair 
2. goal - merge all overlapping intervals
3. constraint - overlap when start is smaller than or equal to the previous end 
4. output - a new array of nonoverlapping intervals 


*/

const mergeIntervals = (arr) => {
  // initalize result array
  // sort array by start time to process events chronologically
  // overlap when start <= previous end, push [previous start, current end] to result

  let sorted = [...arr].sort((a, b) => a[0] - b[0]);
  let result = [];
  for (let i = 0; i < sorted.length; i++) {
    let last = result[result.length - 1];
    console.log(last);

    if (result.length && sorted[i][0] <= result[result.length - 1][1]) {
      console.log(result[result.length - 1][1], 'result[result.length]');

      last = [last[0], sorted[i][1]]; //TODO: this isn't reassigning the value in result
    }
    result.push(sorted[i]);
  }
  return result;
};

// console.log(
//   mergeIntervals([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );
// [[1,6],[8,10],[15,18]]

console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
);
// [1, 5]
