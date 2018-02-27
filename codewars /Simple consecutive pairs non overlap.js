function pairs(ar) {
  var pair = [];
  for (var x = 0; x < ar.length; x++) {
    if((ar[x] -1 === ar[x+1] || ar[x] + 1 === ar[x+1])) {
        if(!pair.includes(ar[x])) {
        console.log(ar[x])
        pair.push(ar[x],ar[x+1])
    }
  }
}
  return pair.length/2;
}

console.log(pairs([1,2,5,8,-4,-3,7,6,5])) 
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])); //2
// console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62])) //2 