//Mutations


// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".



function mutation(arr) {
    // var flag = false;
    //ignore cases
    //igore order of letters
      for(var x = 0; x < arr.length; x++) {
        arr[x] = arr[x].toLowerCase();
        }
          for(var y = 0; y < arr[1].length; y++) {
            if(arr[0].indexOf(arr[1][y]) === -1) 
            return false;
          }
        return true;
    }
    

    
function mutation(arr) {
    return arr[1].toLowerCase().split('').every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) !== -1;
    })
}

  console.log(mutation(["hello", "Hey"]));   

