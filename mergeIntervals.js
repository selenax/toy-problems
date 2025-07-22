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

edge case: 
1. []
2. len=1 
3. end == start
    [1,3],[3,4]  => [1,4]

4. all overlap
    [1,3],[2,6],[3,5],[3,7] 
    [1,6]
                  ==> [1,7]

5. non overlap 
    [1,2],[3,4],[5,6]
*/

const mergeIntervals = (arr) => {
  // edge case
  if (arr.length <= 1) return arr;

  // sort array by start time to process events chronologically
  arr.sort((a, b) => a[0] - b[0]);

  // initalize result array
  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const [currStart, currEnd] = arr[i];
    const [prevStart, prevEnd] = result[result.length - 1];

    // overlap when prevEnd greater than or equal to currStart
    if (prevEnd >= currStart) {
      // merge by updating max end
      result[result.length - 1][1] = Math.max(currEnd, prevEnd);
    } else {
      // no overlap
      result.push(arr[i]);
    }
  }
  // return
  return result;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
// [
//   [1, 6],
//   [8, 10],
//   [15, 18],
// ];

console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
);
// [1, 5]
