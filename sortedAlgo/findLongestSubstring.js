// accepts a string and return lengths of longest substring with distinct charaters

// restraint: O(N)

// *time O(n^2)
function findLongestSubstring(str) {
  let hash = {}
  let start = 0;
  let end = 0;
  let max = 0;
  let char = '';

  while(start < str.length) {
    char = str[end];
    if(end < str.length && !hash[char]) {
      hash[char] = char;
      end++
    } else {
      max = Math.max(max, Object.keys(hash).length);
      start++
      end = start;
      hash = {};
    }
  }
  return max;
}


console.log(findLongestSubstring('AACDBC')); // 4
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('thecatinthehat')); // 7

