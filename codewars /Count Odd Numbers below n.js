
// Count Odd Numbers below n


// Given a number n, return the number of positive odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]




function oddCount(n){
    var array = [];
    for(var x = 0; x < n; x++) {
      if(x%2!==0){
        array.push(x)
      }
    }
    return array.length;
  } 

  console.log(oddCount(15))