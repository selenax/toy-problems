// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(

// NOTE: O(n)
// function fib(n) {
//   let a = 1;
//   let b = 0;
//   let temp;
//   while (n >= 1) {
//     a = a + b;
//     temp = a;
//     b = temp - b;
//     n--;
//   }
//   return b;
// }

// NOTE: O(2^n)
// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fib(n - 2) + fib(n - 1);
// }

// NOTE: O(n)
// function fib(n) {
//   let result = [0, 1];
//   for (let x = 2; x <= n; x++) {
//     let a = result[x - 1];
//     let b = result[x - 2];
//     result.push(a + b);
//   }
//   return result;
// }

// refacor with memoization
// NOTE: O(n) - now it just require one operation per element
function memoize(fn) {
  const cache = {};
  return function(...args) {
    //if arg had been called before, return value
    if (cache[args]) {
      return cache[args];
    }
    //else if arg hasn't been called yet
    const result = fn.apply(this, args);
    //store result in cache object
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
const fib = memoize(slowFib);

// NOTE: the above slowFib can be written as below by reassignment -
// left it there to remind myself the recursive fib on line 64 isnt the same as the original slowFib, it's referencing the memoize version of fib
function fib(n) {
  if (n <= 1) {
    return;
  }
  return fib(n - 1) + fib(n - 2);
}
//reassign fib to the stored memoize version of fib
fib = memoize(fib);

console.log(fib(4));
module.exports = fib;
