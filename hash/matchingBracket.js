


function matchingBrackets(str) {
  let result = [];
  let hash = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for(let value of str) {
    if(value === '(' || value === '{' || value === '[') {
      result.push(value)
    } else {
      // we have a closing bracket and it should be the closing bracket for the last element pushed to the array 
      // else return false, we dont have matching brackets 
      if(hash[result.pop()] !== value) {
        return false;
      }

    }
    
  }
return !result.length;
}


console.log(matchingBrackets('({(()))}}')); // returns false
console.log(matchingBrackets('()')); // returns true