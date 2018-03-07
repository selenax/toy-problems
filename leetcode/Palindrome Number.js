
//9. Palindrome Number

//Determine whether an integer is a palindrome. Do this without extra space.

//can't convert it to string due to restrict of extra space
var isPalindrome = function(num) {
    if(num < 0 || num % 10 === 0 && num !==0) {
        return false;
    }
  var reversed = 0;
  var number = num;
 while (number > 0) {
     console.log(reversed)
     reversed = (reversed * 10) + (number % 10);
     console.log(number)
     number -= number % 10;
     number /= 10;
 }

 return reversed === num;
    
};

var number = 0
console.log(isPalindrome(number))


// resversed = reversed * 10 = 0
// reversed = 121%10 = 1
// number = 121%10
