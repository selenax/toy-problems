// Confirm the Ending

//Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var num = target.length;
    return str.substr(str.length-num) === target;
  }
  
  

// confirmEnding("Bastian", "n") should return true.
// confirmEnding("Connor", "n") should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
// confirmEnding("He has to give me a new name", "name") should return true.
// confirmEnding("Open sesame", "same") should return true.
// confirmEnding("Open sesame", "pen") should return false.
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
// Do not use the built-in method .endsWith() to solve the challenge.