// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

//given fib number, return all the sum off all fib number that is less than or equal to num

// function fibonacci(num){
//  let arr = [0,1];
//  for(let x = 2; x < num+1; x++) {
//    arr.push(arr[x-2] + arr[x-1])
//  }
//  return arr;
// }

function fibonacci(num) {
  let a = 1;
  let b = 0;
  let temp;

  while (num > 1) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(4));

function sumFibs(num) {
  let sum = 0,
    current = 1;
  prev = 0;
  while (current <= num) {
    if (current % 2 !== 0) {
      sum += current;
    }
    current += prev;
    prev = current - prev;
  }
  return sum;
}

console.log(sumFibs(10));

// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.
