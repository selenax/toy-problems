//Given a non-empty array of integers, return the k most frequent elements.

//input: array of integers, won't be empty
//output: array of integers with k most frequent
function numFrequent(array, k) {
  let count = {};
  let result = [];
  for (let x = 0; x < array.length; x++) {
    if (count[array[x]]) {
      count[array[x]]++;
    } else {
      count[array[x]] = 1;
    }
  }
    for(let [key, value] of Object.entries(count).sort((a,b) => b[1]-a[1])) {
      if(result.length < k) {
      result.push(Number(key))
    }
  }
  
  return result;
}



console.log(numFrequent([2, 3, 4, 5, 5, 6, 3], 4));