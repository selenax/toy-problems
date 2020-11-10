// Given sorted array of ints and target average, 
// determine if there's a pair of values in the array where the average of the pair equals the target average. 
// there may be more than 1 pair 

// bonus constraints: 
// time: O(N)
// space: O(1)

// averagePair([1,2,3], 2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19], 8) // true
// averagePair([-1,0,2,6], 4.1) // false
// averagePair([], 4) // false

// *time O(n^2)
function averagePair(arr, target) {
  if(arr.length <= 1) return false;

  for(let x = 0; x < arr.length; x++) {
    for(let y = x + 1; y < arr.length; y++) {
      if(((arr[x] + arr[y])/2) === target) {
        return true;
      }
    }
  }
  return false;
}


// *time O(N) - 2 pointers
function averagePair(arr, target) {
  if(arr.length <= 1) return false;

  let start = 0;
  let end = arr.length - 1; 

  while(start < end) {   // so no value will be repeated
    let avg = (arr[start] + arr[end]) / 2
    if(avg === target) {
      return true;
    // if avg is smaller than sum of biggest and smallest value, need to increase smaller value, else decrease biggest value
    } else if(avg < target) {   
      start++   
    } else {
      end --
    }
  }
  return false;
}



console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); // true
console.log(averagePair([1,2,3], 2.5)) // true
console.log(averagePair([-1,0,2,6], 4.1)) // false
console.log(averagePair([], 4)) // false