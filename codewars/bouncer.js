
function bouncer(arr) {
  //filter through the array 
  return arr.filter(function(element) {
    //! = false, !! = true
      //return only element that are true
    return !!element;
  });
}

//refactor 
function bouncer(arr) {
    //passing in native Boolean function
    return arr.filter(Boolean);
}

// bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);