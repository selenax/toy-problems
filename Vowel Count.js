// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    string = str.split('');
    
    var count = string.filter(function(letter) {
      return vowels.includes(letter)
    });
    return count.length;
  }



  function getCount(str) {
    var regex = /[aeiou]/gi
    var result;
    result = str.match(regex)
    if (result === null) {
        return 0;
    }
    return result.length;
     }
