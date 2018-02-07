//highAndLow

//input: string 
//output: string with highest number first and lowest number second with a space in between


function highAndLow(numbers){
    //convert the string to individual number 
    //find max and find min
    //return max and min in string format
    var result = '';
    var num = numbers.split(' ').map(Number).sort();
    console.log(num)
    var max = Math.max(num[0], num[num.length-1])
    var min = Math.min(num[0], num[num.length-1])
    //output is one string 

    result = min.toString() + ' ' + max.toString();
    return result;
  }


  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))