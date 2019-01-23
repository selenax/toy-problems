// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz() {
  for(var x = 1; x <= 100; x++) {
    //15 is the least common multiple
    if(x%3===0 && x%5===0) console.log('FizzBuzz');
    else if (x%3===0) console.log('Fizz');
    else if (x%5===0) console.log('Buzz');
    else console.log(x);
}
}

console.log(fizzBuzz())

//refactor
function fizzBuzz() {
  for(let x = 0; x < 100;) {

    //1%3===false -> '' 
    //1%5===false -> ''
    //'' + '' + i -> i;

    //3%3===true -> Fizz
    //3%5===false -> ''
    //Fizz + '' -> Fizz

    //15%3===true -> Fizz
    //15%5===true -> Buzz
    //Fizz + Buzz -> FizzBuzz

    console.log((++x%3 ? '' : 'Fizz') + (x%5 ? '' : 'Buzz') || x)
  }
}

console.log(fizzBuzz())