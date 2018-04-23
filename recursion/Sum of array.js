//Compute the sum of an array of integers with recursion 



//requirements
// should return a number ‣
// should return the sum of an array of non-negative integers ‣
// should return the sum of an array of negative integers ‣
// should return the sum of an array of mixed non-negative and negative integers ‣
// should return 0 for empty array ‣
// should accept an array with a single integer ‣
// should not mutate the input array ‣
// should use recursion by calling self ‣


// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    var arr = array.slice()
    if(!arr[0]) {
        return 0;
    }
    if(arr.length === 1) {
        return arr[0];
    }
    return arr.pop() + sum(arr);
}



//refactor with extra parameter 
var sum = function(array, x=0) {
    if(x === array.length-1) {
        return array[x];
    }
    return array[x] + sum(array, x+1)
}  

console.log(sum([1,2,3,4,5,6]));