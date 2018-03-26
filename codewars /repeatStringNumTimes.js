//repeatStringNumTimes

//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
// function repeatStringNumTimes(str, num) {
//     var result = '';
//     if(num < 0) {
//       return result;
//     }
    
//      for(var x = 0; x < num; x++) {
//        result += str;
//      }
//      return result;
//    }



//refactor recursion 
function repeatStringNumTimes(str,num) {
    if(num < 0) {
        return '';
    } 
    if(num === 1) {
        return str;
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}
   
console.log(repeatStringNumTimes("abc", 3));
// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".
