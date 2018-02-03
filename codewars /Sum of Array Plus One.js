// Sum of Array Plus One
// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

function sumPlusOne (array) {
    var num = array[array.length-1];
    var result = 0;
    result = num * (num + 1)/2;
    return result + array.length;
}


console.log(sumPlusOne([1,2,3,4,5]))