//Seek and Destroy


// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.



function destroyer(arr) {
   var arg = Array.from(arguments).slice(1); 
   for(var x = 0; x < arr.length; x++) {
       for(var y = 0; y < arg.length; y++) {
            if(arr[x] === arg[y]) {
                delete arr[x];
                
            }
       }
    }
    return arr.filter(Boolean);
  }
  
  function destroyer(arr) {
      var args = Array.from(arguments).slice(1);
      return arr.filter(function(val) {
          return !args.includes(val)
      })
  }
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
