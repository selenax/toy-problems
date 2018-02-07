//Sorted Union 

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.


//input: 2+ arrays
//output: array of elements in order of original array
    //elements that appeared already shouldnt apear again 

function uniteUnique(arr) {
    var array = [];
    var joined = Array.from(arguments)
    console.log(joined)
    for(var x = 0; x < joined.length; x++) {
        for(var y = 0; y < joined[x].length; y++) {
            if(!array.includes(joined[x][y])) {
                array.push(joined[x][y])
            }
        }
    }
    return array;
}
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  

  function uniteUnique(arr1, arr2) {
      var args = Array.prototype.slice.call(arguments);
        console.log(args)
        var newArr = args.reduce(function(arr1, arr2) {
            return arr1.concat(arr2.filter(function(i) {
                return arr1.indexOf(i) === -1;
            }))
        })
        return newArr;
  }

  

  console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]))
//    should return [1, 3, 2, [5], [4]]