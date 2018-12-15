/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

//input: string 
//output: 2d array with highest frequency followed by sort character 
function characterFrequency(str) {
  //find frequency
  let array = [];
  let count = {};
  for(let x = 0; x < str.length; x++) {
    if(count[str[x]]) {
      count[str[x]]++;
    } else {
      count[str[x]] = 1;
    }
  }
  console.log(count)
//sort highest frequency, sort by charcater
//return in 2d array 
for(let [key, value] of Object.entries(count).sort((a,b) => b[1]-a[1])){
  array.push([key,value])
}
return array.sort((a,b) => a[0]-b[0])
}




console.log(characterFrequency('mississippi')); 
// console.log(characterFrequency('popopo'))
// console.log(characterFrequency('mmmaaaiiibbb'))












 //input: string
 //output: array of array with each character as key and occrence as value 
    //sorted by occurence from most to least 
var characterFrequency = function(string) {
  var result = [];
  var obj = {};
  //loop string
  for(var x = 0; x < string.length; x++) {
    var key = string[x];
     //assign to obj to keep track of occurence
    if(obj[key]) { obj[key]++; } 
    else { obj[key] = 1; }
  }

  for(var occurence in obj) { result.push([occurence, obj[occurence]]); }
  // sorted  value in descending order
    var output = result.sort(function(a,b) { return b[1]-a[1]; });
  //  ascending order sort by key 
    return output.sort(sortByAscend);
  };

//helper function: sort by ascii 
function sortByAscend (a, b) {
  if(a[1] === b[1]) {
  return a[0].charCodeAt() - b[0].charCodeAt();
  }
}


console.log(characterFrequency('mississippi')); 
// console.log(characterFrequency('popopo'))
// console.log(characterFrequency('mmmaaaiiibbb'))
