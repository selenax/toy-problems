function pairs(ar) {
  var count = 0;
  for (var x = 0; x < ar.length; x++) {
    if(Math.abs(ar[x]-ar[x+1] === 1)) {
      count++;
      }
    }
    return count;
  }

console.log(pairs([1,2,5,8,-4,-3,7,6,5])) 
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])); //2
// console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62])) //2 