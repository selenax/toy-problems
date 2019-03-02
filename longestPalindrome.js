// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// NOTE: Medium

//brute force:
// var longestPalindrome = function(s) {
//   let subStr = ''
//   let result = []
//   for(let x = 0; x < s.length; x++) {
//       subStr = s[x];
//       for(let y = x + 1; y < s.length; y++) {
//           subStr += s[y]
//       if(isPalindrome(subStr)) {
//           result.push(subStr)
//           console.log(result)
//           }
//       }
//   }
//   return result.reduce((a,b) => a.length > b.length ? a : b, 0) || subStr
// };

const longestPalindrome = s => {
  if (!s || s.length <= 1) {
    return s;
  }
  let longest = s.substring(0, 1);
  for (let i = 0; i < s.length; i++) {
    let temp = expand(s, i, i);
    if (temp.length > longest.length) {
      longest = temp;
    }
    temp = expand(s, i, i + 1);
    if (temp.length > longest.length) {
      longest = temp;
    }
  }
  return longest;
};

const expand = (s, begin, end) => {
  while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
    begin--;
    end++;
  }
  console.log(begin);
  return s.substring(begin + 1, end);
};

console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('ac'));
