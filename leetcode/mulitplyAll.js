// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:


function multiplyAll(arr) {

  return arr.flat().reduce(function(a,b) {
    return a * b;
  })

}

// Modify values below to test your code
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
