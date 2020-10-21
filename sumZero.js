//accept a sorted array of ints
//find first pair where sum is 0
//return array includes both value that sum to zero or undefined if pair doesn't exist


// O(n^2)
function sumZero (arr) {
    //loop outter array
        //loop inner array 
        //check to see if sum from outter and inner array int equal to 0
            //if equal, push outter array int and inner array int to result 
    //return pair if found, else return undefined 

    for(let x = 0; x < arr.length; x++) { 
        for(let y = x+1; y < arr.length; y++) {
            if(arr[x] + arr[y] === 0) {
                return [arr[x], arr[y]]
            }
        }
    }
}


//refactor
//O(N)
function sumZero(arr) {
    let left = 0;  //start index 
    let right = arr[arr.length-1]  //end index

    while(left < right) { //so index won't over lap 
        let sum = arr[left] + arr[right] 
        if(sum === 0) {
            return [arr[left], arr[right]]
        } else if(sum > 0) { //if sum > 0, need to subtract 1, hence move inner from right side
            right--; 
        } else {
            left++; //if sum < 0, need to add 1, hence move inner from left
        }
    }
        
}

console.log(sumZero([-1, 0, 1, 2])) //[-1, 1]
console.log(sumZero([2,1,0,-1,-2])) //[2, -2]
console.log(sumZero([1,2,3])) //undefined




