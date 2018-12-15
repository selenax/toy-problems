//Given a non-empty array of integers, return the k most frequent elements.

//input: array of integers, won't be empty
//output: array of integers with k most frequent
function frequent(array, k) {
  let count = {};
  let result = [];
  for (let x = 0; x < array.length; x++) {
    if (count[array[x]]) {
      count[array[x]]++;
    } else {
      count[array[x]] = 1;
    }
  }
  console.log(count, result.length); 
  console.log(Object.entries(count).sort((a, b) => b[1]-a[1]));  
  while(result.length < k) {
    for (let [key, value] of Object.entries(count)) {
      console.log(key);
    }
  }
  return result;
}



console.log(frequent([2, 3, 4, 5, 5, 6], 4));