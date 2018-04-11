function fibonacci(number) {
    if(number === 0) {
        return 0;
    }
    if( number < 2 ) {
        return 1;
    }
    return fibonacci(number-1) + fibonacci(number-2);
};

console.log(fibonacci(4))

//recursion explanation
            fib(3)        +        fib(2)
        fib(2) + fib(1)         fib(1)+fib(0)
    fib(1)+fib(0) +fib(1)  
     
     
       result = 1 + 0 + 1 + 1 + 0 = 3