// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

function findPairForSum (array, sum) {
	var pair = [];
	for(var x = 0; x < array.length; x++) {
	  for(var y = x + 1; y < array.length; y++) {
		if(array[x] + array[y] === sum) {
		  pair.push(array[x], array[y]);
		}
	  }
	}
	return pair;
  }
  
  var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
  console.log(pair); // --> [4, 5]