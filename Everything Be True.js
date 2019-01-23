//Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// Remember, you can access object properties through either dot notation or [] notation.


function truthCheck(collection, predicate) {
    var count = 0;
    for (var key in collection) {
      // If it is has property and value is truthy
      if (collection[key].hasOwnProperty(predicate) && Boolean(collection[key][predicate])) {
        count++;
      }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return count == collection.length;
  }
  
  // test here
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");q