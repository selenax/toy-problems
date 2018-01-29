//input: string
//output: array of duplicated letters 

//loop through string and assign letter to key, value will increase at each occurence of the letter
//key with value bigger than 1 will be pushed to result array, return array;
function findDuplicates(words) {
    var result = [];
    var obj = {};
    for( var x = 0; x < words.length; x++ ) {
       if(obj[words[x]]) {
        obj[words[x]]++;
       } else {
           obj[words[x]] = 1;
       }
    }
    for(var key in obj) {
        if(obj[key] > 1) {
            result.push(key);
        }
    }
    return result;
}

console.log(findDuplicates("mississippi")); 
// ['i', 's', 'p'];