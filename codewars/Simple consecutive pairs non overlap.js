// Simple consecutive pairs
// In this Kata your task will be to
// return the count of pairs that have consecutive numbers as follows:

function pairs(ar) {
  var count = 0;
  for (var x = 0; x < ar.length; x += 2) {
    if (ar[x] - 1 === ar[x + 1] || ar[x] + 1 === ar[x + 1]) {
      count++
    }
  }
  return count;
}


//refactor
function pairs(ar) {
  var count = 0;
  for (var x = 0; x < ar.length; x+=2) {
    if(Math.abs(ar[x] - ar[x+1]) === 1) {
      count++;
      }
    }
    return count;
  }

console.log(pairs([1,2,5,8,-3,-4,7,6,5])) 
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])); 
// console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62])) //2 