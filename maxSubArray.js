// Max Range Sum
// Difficulty: Easy
// Time Limit: 30 min
// Description
// Bob is developing a new strategy to get rich in the stock market. He wishes to invest his portfolio for 1 or more days, then sell it at the right time to maximize his earnings. Bob has painstakingly tracked how much his portfolio would have gained or lost for each of the last N days. Now he has hired you to figure out what would have been the largest total gain his portfolio could have achieved. 

// Example: Bob kept track of the last 10 days in the stock market. On each day, the gains/losses are as follows: 7 -3 -10 4 2 8 -2 4 -5 -2. If Bob entered the stock market on day 4 and exited on day 8, his gains would have been 16 (4 + 2 + 8 + -2 + 4).

// Input 
// The input consists of integers on a line separated by spaces. The input contains N, the number of days (0 < N < 10000), followed by N integers D (-10000 < D < 10000) indicating the gain or loss on that day.

// Output 
// For each test case, print a line containing the maximum possible gain over the period. If no gain is possible, print 0.
// Test 1
// Input
// 10 7 -3 -10 4 2 8 -2 4 -5 -6
// Expected Output
// 16

//input: string of numbers separated by space
//output: max sum || 0 
function maxProfit (input) {
  //convert input into numbers in array 
  let arrayNum = input.split(' ').map((num) => { return parseInt(num); })
  let currentProfit = 0;
  let max = 0;

  //loop through array 
  for(let value of arrayNum) {
    //add current value, if sum is negative, reset current to 0
    currentProfit = Math.max(0, currentProfit+value);
    //max to keep track of the max value 
    max = Math.max(max, currentProfit);
  }
  return max;
}

console.log(maxProfit('-2 -3 -1'))
console.log(maxProfit('1 2 -3 4'))
