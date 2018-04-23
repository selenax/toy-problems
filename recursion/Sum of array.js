// 2. Compute the sum of an array of integers with recursion 



// sum([1,2,3,4,5,6]); // 21


var sum = function(array) {
    if(array.length === 1) {
        return array[array.length-1]
    }
    return array.pop() + sum(array);
}


console.log(sum([1,2,3,4,5,6])); // 21



var sum = function(array, x=0) {
    if(x === array.length-1) {
        return array[x];
    }
    return array[x] + sum(array, x+1)
}  

console.log(sum([1,2,3,4,5,6]));