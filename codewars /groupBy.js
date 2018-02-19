/* 
Write a function, groupBy, which splits a collection into sets, grouped by the result of running each value through iteratee.

groupBy(list, iteratee) 
*/
//input: array of numbers(decimals) 
//output: object with key being the number rounded down, value: array of numbers
//create obj
function groupBy(list, iteratee) {
    var obj = {};
    for(var x = 0; x < list.length; x++) {
      // key is result of invoking iteratee function with list[x]
      // check if key is already there
        // add list[x] to the array at the key
      // else
        // set value of key in obj to be array with list[x]
        var key = iteratee(list[x]);
        if(obj[key]) {
            console.log(obj)
          obj[key].push(list[x]);
        } else {
          obj[key] = [list[x]];
        
      }
    }
    return obj;
  }
  
  // key = 2
  // obj =  { 1: [1.3], 2: [2.1] }
  console.log(groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); }));
  // returns {1: [1.3], 2: [2.1, 2.4]}
  
  
  console.log(groupBy(['cat', 'dog', 'horse'], function(word) { return word.length }));
  // returns {3: ["cat", "dog"], 5: ["horse"]}