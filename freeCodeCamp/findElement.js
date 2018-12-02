// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) {

  let result = arr.filter((value) => func(value));
  console.log(result)
    
  return result[0] ?  result[0] : undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));