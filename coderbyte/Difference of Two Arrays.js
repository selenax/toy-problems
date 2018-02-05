
// Difference of two Arrays 

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
    var newArr = [];
    
    function check(first, second) {
        for(var x = 0; x < first.length; x++) {
            if(second.indexOf(first[x]) === -1) {
                newArr.push(first[x]);
            }
        }
    }
    check(arr1, arr2);
    check(arr2, arr1);
    return newArr;

}
  

function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(function(item) {
        return !arr1.includes(item) || !arr2.includes(item);
    });
}
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  
