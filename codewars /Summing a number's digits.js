//turn number into string, split and loop through 
//accum the sum 
//absolute value 
//return sum
function sumDigits(number) {
    var num = Math.abs(number);
    var numStr = num.toString().split('');
        return numStr.reduce(function(acc, curr){
            return acc + Number(curr)
        }, 0)
    }
  

  
  console.log(sumDigits(-10))