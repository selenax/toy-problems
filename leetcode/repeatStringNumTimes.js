// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.



function repeatStringNumTimes(str, num) {
  let newStr = ''
  for(let x = 0; x < num; x++) {
    newStr += str
  }
  return newStr;
}

//refactor
function repeatStringNumTimes(str, num) {
  // repeat after area
  return num < 0 ? '' : str.repeat(num)
}


console.log(repeatStringNumTimes("abc", 3));