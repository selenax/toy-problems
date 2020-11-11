// Takes in 2 strings and check whether char in first string form a subsequence of the chars in the second string

// Restraints: 
// Time: O(N+M)
// Space: O(1)


// if not all char from str1 found in str2, return false
// if str1 char order is changed in str2, return false;
// order matter in str2, but doesn't have to be consecutive
  // ! isSubsequence('abc', 'abbc')); // true

// *time O(N)
// *space O(1)
function isSubsequence(str1, str2) {

  let i = 0;
  let j = 0;

  if(!str2.length) return false;
  
  // i track # of matched chars of str1 with str2
  // while j loops through str2
  while(j < str2.length) {
    if(str1[i] === str2[j]) {
      i++
    }
    // if i === str1.length, found a match 
    if(i === str1.length) {
      return true;
    }
    j++ // keep iterating str2 
  }
  return false;
}

// recursion 
function isSubsequence(str1, str2) {
  if(!str1.length) return true;
  if(!str2.length) return false;

  // check to see if first char is a match 
  // if it is, compare the next char on both strings

  // if first char not a match, compare next char in str2

  if(str1[0] === str2[0]) {
    return isSubsequence(str1.slice(1), str2.slice(1))
  }
  return isSubsequence(str1, str2.slice(1))

}

console.log(isSubsequence('hello', 'hello world'));  // true
console.log(isSubsequence('sing', 'string'));  // true
console.log(isSubsequence('abc', 'acb')); // false
console.log(isSubsequence('abc', 'abbc')); // true
console.log(isSubsequence('', 'abbc')); // true