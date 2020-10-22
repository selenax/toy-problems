// Find all strings that match specific pattern in a dictionary

// Given a dictionary of words, find all strings that matches the given pattern where every character in the pattern is uniquely mapped to a character in the dictionary.

// return null if no matches

// Input:
// dict = ["abb", "abc", "xyz", "xyy"];
// pattern = "foo"
// Output: [xyy abb]
// xyy and abb have same character at
// index 1 and 2 like the pattern

// Input:
// dict = ["abb", "abc", "xyz", "xyy"];
// pat = "mno"
// Output: [abc xyz]
// abc and xyz have all distinct characters,
// similar to the pattern.

// Input:
// dict = ["abb", "abc", "xyz", "xyy"];
// pattern = "aba"
// Output: []
// Pattern has same character at index 0 and 2.
// No word in dictionary follows the pattern.

// Input:
// dict = ["abab", "aba", "xyz", "xyx"];
// pattern = "aba"
// Output: [aba xyx]
// aba and xyx have same character at
// index 0 and 2 like the pattern



// *time: O(N*K) => O(N)
// *space: O(N)
function matchPatterDictionary (dic, pat) {
  let result = [];
  for(let prop of dic) {
    console.log(prop, 'prop');
    
    //only check if word in dic matches length with pat
    if(prop.length === pat.length) {
      //helper function hashMap will spit out a string consisted of a pattern from the given word
      //if both strings match, push to result
      if(hashMap(prop) === hashMap(pat)) {
        result.push(prop)
      }
    }
  }
  return !result.length ? null : result;
}

// *takes in a string and spit out a pattern 
// *time O(2N) -> O(N)
// *space O(N)
function hashMap(str) {
  let hash = {};
  let result = "";
  let count = 1;
  // loop through pattern, add each unique char to hash
  // start with count as 1
  // loop through rest char,
  // if char doesnt exist as key in hash,  assign count as value to key, count increase by 1
  // else if exist, skip
  // abb: {a:1 b:2} 
  // abc: {a:1 b:2 c:3}
  for (let prop of str) {  
    if (!hash[prop]) {
      hash[prop] = count;
      count++;
    }
  }
  // loop over str and for each char, check to see the value in hash,
  // accummulate each value into result
  // return result
  for (let prop of str) {
    // console.log(prop, "😅");
    if (hash[prop]) {
      result += hash[prop];
    }
  }
  console.log(result);
  
  return result;
}
// console.log(hashMap("abb")); // 122 
// console.log(hashMap("abc")); // 123


console.log(matchPatterDictionary(["xxyzzaabcdd"],  "mmnoopplfmm")); // null
// hash for word: 11233445677,  hash for pattern: 11233445611

console.log(matchPatterDictionary(["abab", "aba", "xyz", "xyx"],  "aba")); // [ 'aba', 'xyx' ]

