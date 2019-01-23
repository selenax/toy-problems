//Outliers


// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
  
// The return value should be 1-indexed, not 0-indexed.

// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

function detectOutlierValue(num) {
    //find SOLE even/odd number
    var evenArr = [];
    var oddArr = [];
    var numArr = [];
    var outlier = 0;
    num.split(' ').forEach(function(element) {
      var number = Number(element);
      numArr.push(number);
      console.log(numArr);
      if(number%2===0) {
        evenArr.push(number);
      } else {
        oddArr.push(number);
      }
    });
    if(evenArr.length > oddArr.length) {
      //find out the index of oddArr[0] in numArr
      outliner = numArr.indexOf(oddArr[0]);
    } else {
      outliner = numArr.indexOf(evenArr[0]);
    }
    
  
  return outliner + 1;
    
  }
  
  detectOutlierValue('2 4 7 8 10');
  
  function assertEqual(actual, expected, testName) {
    if(actual === expected) {
      console.log('passed');
    } else {
      console.log('Failed, ' + testName + ' Expected ' + expected + ' but got ' + actual);
    }
  }
  
  assertEqual(detectOutlierValue('2 4 7 8 10'), 3, 'should return the odd outlier');
  
  
  
  
  
  