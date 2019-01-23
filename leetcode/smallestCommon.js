// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.



function smallestCommons(arr) {
  let max = Math.max(arr[0], arr[1])
  let min = Math.min(arr[0], arr[1])
  let range = [];
  for(let i = min; i <= max; i++) {
    range.push(i)
  }
  let lcm = range[0];
  for(let j = 1; j < range.length; j++) {
    let GCD = gcd(lcm, range[j]);
    lcm = (lcm * range[j])/GCD
  }
  return lcm;

  function gcd(x, y) {
    if(y === 0) {
      return x;
    } 
    return gcd(y, x%y)
  }
}

console.log(smallestCommons([1,5]));

// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.

function gcd(x, y) {    // Implements the Euclidean Algorithm
  if (y === 0)
      return x;
  else
      console.log(y, "y")
      console.log(x, 'x')
      console.log(x%y)
      return gcd(y, x%y);
  }


console.log(gcd(1,3))
