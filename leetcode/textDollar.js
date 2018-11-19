// Text Dollar
// Difficulty: Hard
// Time Limit: 45 min
// Description

// You are given a positive integer number. This represents the sales made that day in your department store. The payables department however, needs this printed out in English. NOTE: The correct spelling of 40 is Forty. (NOT Fourty)
// Input 
// Your program should read lines of text from standard input. Each line contains a positive integer.

// Output 
// For each set of input print a single line to standard output which is the english textual representation of that integer. The output should be unspaced and in CamelCased. Always assume plural quantities. You can also assume that the numbers are < 1000000000 (1 billion). In case of ambiguities eg. 2200 could be TwoThousandTwoHundredDollars or TwentyTwoHundredDollars, always choose the representation with the larger base i.e. TwoThousandTwoHundredDollars.
// Test 1
// Input
// 3 
// Expected Output
// ThreeDollars
// Test 2
// Input
// 466 
// Expected Output
// FourHundredSixtySixDollars
// Test 3
// Input
// 1234 
// Expected Output
// OneThousandTwoHundredThirtyFourDollars
// Test 4
// Input
// 10 
// Expected Output
// TenDollars
// Test 5
// Input
// 21 
// Expected Output
// TwentyOneDollars


//input: positive integer 
//output: textual representation of integer
  //unspaced + camelcase (466 => FourHundredSixtySixDollars)
  //choose representation with larger base (two thousand two hundred instead of twenty two hundred)


//assume number will be < 1 billion 
function textDollar(num) {
const digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const tenRange = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const hundredRange = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

// const hundredRange = ['', 'Hundred', 'Thousand','Million'];
if ( num < 10 ) return digit[num] ;
if ( num < 20 ) return tenRange[num%10] ;
//subtract 2 bc there are only 8 items in array
if ( num < 100) return hundredRange[Math.floor(num/10) - 2] + tenRange[num%10] ;
// less than 1000
if ( num < 1000 ) return tenRange[Math.floor(num/100)] + "Hundred" + textDollar((num%100));
// less than 100,000
if ( num < 100000 ) return textDollar(Math.floor(num/1000)) + "Thousand" + textDollar(num%1000);
// less than 1 million
if ( num < 1000000 ) return textDollar(Math.floor(num/100000)) + "Hundred" + textDollar(num%100000);
// less than 1 billion
if ( num < 1000000000 ) return textDollar(Math.floor(num/1000000)) + "Million" + textDollar(num%1000000);

};


console.log(textDollar(331))

console.log(textDollar(920378))

console.log(930338%100000)