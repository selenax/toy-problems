// accepts array of ints and a number called n 
// calculate max sum of n consecutive elements in array 


// create variable to store max sum 
// loop array 
// slice where n is
// calc sum and store in variable
    // math.max to compare max sum as we move along array 
// n is > reminder num left, return max sum 

function maxSubarraySum (arr, num) {
  let max = arr[0];
  for(let x = 0; x < arr.length - num + 1; x++) { // x < 3
    temp = 0;
    for(let y = 0; y < num; y++) {
      temp += arr[x + y]

    }
    if(temp > max) {
      max = temp;
    }
  } 
  return max;
}



function maxSubarraySum (arr, num) {
  if(arr.length < num) {
    return null;
  }
  let max = 0;
  for(let x = 0; x < num; x++) {
    max += arr[x];
  }
  let temp = max;
  for(let x = num; x < arr.length; x++) {
    temp = temp - arr[x-num] + arr[x];
    if(temp > max) {
      max = temp;
    }
  }
  return max;
}


// console.log(maxSubarraySum([5,9,4,6,8],3)); //19

console.log(maxSubarraySum([1,4,3,4,2,6],4)) //13

