// Flip every pair of characters in a string.


// Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!


//flip every 2 letters 

function flipPairs (string) {
    var newStr = '';
    //x should be incremented by 2 to capture every pair of characters 
    for(var x = 0; x < string.length; x+=2) {
        //x = 1,0,3,2 etc.. 
        newStr += (string[x+1]+string[x]);
    }
    return newStr;
}
console.log(flipPairs('check out how interesting this problem is, it\'s insanely interesting!'))