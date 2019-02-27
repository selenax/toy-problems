// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

//
function addTogether() {
  let arg = [...arguments];
  if (arg.length > 1) {
    if (Number.isInteger(arg[0]) && Number.isInteger(arg[1])) {
      return arg[0] + arg[1];
    } else {
      return undefined;
    }
  } else {
    if (arg.length === 1) {
      if (!Number.isInteger(arg[0])) return undefined;
    }
    return function(y) {
      console.log(y);
      if (!Number.isInteger(y)) {
        return undefined;
      } else {
        return arg[0] + y;
      }
    };
  }
}

var sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3)); //returns 5.
console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether('http://bit.ly/IqT6zt'));
console.log(addTogether(2, '3'));
// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.
