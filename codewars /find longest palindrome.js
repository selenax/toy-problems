// find longest palindrome

// Find the longest single-word palindrome within a phrase.
// The phrase will only contain letters (no symbols, punctuation, or numbers).
// Your palindrome detection should be case-insensitive.
// If there are multiple longest palindromes of equal length, return the last one.

function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  var string = sentence.split(' ');
  var palindrome = string.filter(isPalindrome);
  return palindrome.reduce((a,b) => a.length > b.length ? a:b, 0)
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return reverseString(word) === word;
}

function sortAscendingByLength(a, b) {
    return a-b;
}

console.log(findLongestPalindrome('Our civic duty is to kayak'));

console.log(findLongestPalindrome("Our civic duty is to kayak without a rotator as you well know"));

console.log(findLongestPalindrome("Our civic duty is to kayak without a RoTaToR as you well know"));