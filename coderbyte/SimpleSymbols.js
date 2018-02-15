//Simple Symbol


// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 


//if first index = letter, return false; 
//loop through str, if str[x] match reg 
    //return true if index before and after str[x] === +
function SimpleSymbols(str) { 
    var reg = /[a-z]/gi;
    if(str[0].match(reg)) {
        return false;
    }
    for(var x = 1; x < str.length; x++) {
       
        if(str[x].match(reg)) {
            return str[x-1] === '+' && str[x+1] === '+';
        }
    }
}
  console.log(SimpleSymbols("+d+=3=+s+"));
    

