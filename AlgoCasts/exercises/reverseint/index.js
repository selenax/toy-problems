// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reverse = '';
  if(n < 0) {
    let str = n.toString();
    for(var x = 1; x < str.length; x++) {
      reverse = reverse + str[str.length - x];
      console.log(reverse)
    }
    return reverse * -1
  } else {
    str = n.toString().split('').reverse().join('')
  }
  return Number(str);
}

//refactor
function reverseInt(n) {
  const reversed = n
  .toString()
  .split('')
  .reverse()
  .join('');
  console.log(reversed)
  return parseInt(reversed) * Math.sign(n);
}


console.log(reverseInt(-90))

module.exports = reverseInt;
