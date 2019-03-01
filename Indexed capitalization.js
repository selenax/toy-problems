// Indexed capitalization

// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

function capitalize(s, arr) {
  s = s.split('');
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] < s.length) {
      s[arr[x]] = s[arr[x]].toUpperCase();
    }
  }
  return s.join('');
}
console.log(capitalize('abcdef', [1, 2, 5, 100]));
