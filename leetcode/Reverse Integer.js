
// 7. Reverse Integer

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1
// Input: 123
// Output:  321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21




//need to acccount for 32 bit signed integer (2,147,483,647 )


var reverse = function(x) {
    var num = 0;
    var str = x.toString().split('');
     
    if(str[0] === '-') {
      var newStr = str.slice(1).reverse().join(''); 
      num = Number(-newStr);
    } else {
      newStr = str.reverse().join(''); 
      num = Number(newStr);
    }
    if(Math.abs(num) > 2147483647) {
      return 0;
    }
    return num;
  }
  
  
  var num = 1534236469;
  console.log(reverse(num))
