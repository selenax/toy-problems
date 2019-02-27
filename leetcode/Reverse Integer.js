
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

//runtime 157ms
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


//refactor: runtime 72 ms
//input: integer, negative/positve
//output: integer, reversed of input || 0 of over 32bit

var reverse = function(x) {
  let rev = x.toString().split('').reverse();
  if(rev[rev.length-1] === '-') 
  rev.unshift(rev.pop());       
  let result = Number(rev.join('')) 
  return result >= Math.pow(-2, 31) && result <= (Math.pow(2, 31)-1) ? result : 0;
}
