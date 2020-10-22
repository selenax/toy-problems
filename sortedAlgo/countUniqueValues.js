// accept a sorted array 
// count unique values in array
// values can be negative 


// loop and object.keys = O(2N) => O(N)
function countUniqueValues(arr) {
    let obj = {}
    for(let num of arr) {
        obj[num] = ++obj[num] || 1
    }
    return Object.keys(obj).length;
}
console.log(countUniqueValues([1,2,3,4,4])); //4
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-3,-1,0,0])); //3


// refactor with 2 left pointers
// O(N)
function countUniqueValues(arr){
    // start with 2 pointers (i, j)from the left to compare the first two numbers
    // i index keep tracks of unique values while j loops the rest of the array 
    // if arr[i] !== arr[j] we want to keep looping the rest of the value to check for more unique values 
        // increase i by 1 as for loop increase j
        // assign the value of j to i 
        // the original array is mutated, where the all the values up to i will be unique 
        // finish for loop 
     // return i + 1 since array start at index 0   
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
            if(arr[i] !== arr[j]) {
                i++;
                arr[i] = arr[j]
            } 
            console.log(arr[i], arr[j]);
            
        }
        return i + 1;
    }

console.log(countUniqueValues([-3,-1,0,0])); //3
console.log(countUniqueValues([1,1,1,1,1,2])); //2
console.log(countUniqueValues([1,2,3,3,4])); //4

//          i   
//   [1,2,3,3,4]
//            j
//    1,2,3,4,4  //since j is at the end of the loop, index i will be the last unique number
//    since array starts at index 0, to get the length of where index i is, we add 1. 

     