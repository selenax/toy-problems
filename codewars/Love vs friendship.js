// Love vs friendship

// If　a = 1, b = 2, c = 3 ... z = 26
// Then l + o + v + e = 54
// and f + r + i + e + n + d + s + h + i + p = 108
// So friendship is twice stronger than love :-)
// The input will always be in lowercase and never be empty.


function wordsToMarks(string){
    var sum = 0;
      var alphabet = '0abcdefghijklmnopqrstuvwxyz';
      for(var x = 0; x < string.length; x++) {    
        sum += alphabet.indexOf(string[x]);
        }
      return sum;
    }



//refactor 
const wordsToMarks = string => string.split('').reduce((acc, curr) => acc + curr.charCodeAt() - 96, 0);


console.log(wordsToMarks("family"));