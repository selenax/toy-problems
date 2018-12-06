// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  
  // dont mutate original input 
  //  create a variable for arr2 since we are adding to it
  // loop first array and insert each element to 2nd array 
  let newArr2 = arr2.slice()
  arr1.map(function(value) {
    newArr2.splice(n, 0, value)
    n++
  })
return newArr2
}


console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));