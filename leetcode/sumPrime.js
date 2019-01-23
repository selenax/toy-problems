

// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

//2,3,5,7
// function sumPrimes(num) {
//   for(let x = 2; x <=num; x++) {
//     if(x % 2 !== 0 && x % 3) {
      
//     }
//   }
//   return num;
// }

// sumPrimes(10);

console.log(3%3)

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.




function sumPrimes(num) {
  let sum = 0;
  for(let y = 0; y <= num; y++) {
    if(isPrime(y)) {
      sum += y
    }
  }
 return sum;
}

function isPrime(num) {
  if(num < 2) return false;
  for(let x = 2; x < num; x++) {
    console.log(x)
    if(num%x === 0) {
      return false
    }
  }
  return true;
}
console.log(isPrime(2))
// console.log(sumPrimes(10));