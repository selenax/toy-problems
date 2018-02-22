// Peak array index


// Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1.

// For example:

// peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at indexes 4,5,6. We don't sum index 3.
// peak([1,12,3,3,6,3,1]) = 2
// peak([10,20,30,40]) = -1

//loop through each index and test if sum before and after index equal to each other
    //return if equal
    //else return -1;

function peak(arr) {
    for(var x = 1; x < arr.length; x++) {
        var rightSum = arr.slice(0, x).reduce((a,b) => a + b, 0)
        var leftSum = arr.slice(x+1).reduce((a,b) => a + b, 0)
        if(rightSum === leftSum) {
            return x;
        }
        
    }
    return -1;
}

// console.log(peak([1,2,3,5,3,2,1]))
console.log(peak([1,12,3,3,6,3,1]))

