//minConversion

// Write a function, minuteConversion, that accepts a whole number of minutes and returns a string with a human readable string of hours and minutes.

// If the number of minutes is more than 60, the minutes should be converted to hours. For both hours and minutes, the correct plural/singular form should be used, and if the value of hours or minutes is zero, the word should be omitted entirely. See the test cases for more details.


var minConversion = function(num) {
    if(num <= 60) {
      return num + ' minutes'
    } if (num%60 === 0) {
      return Math.floor(num/60) + ' ' + hourConversion(num);
    }
    return Math.floor(num/60) + ' ' + hourConversion(num) + ' ' + num%60 + ' ' + min(num)
  }

  var hourConversion = function(num) {
    var hour = Math.floor(num/60);
    return hour === 1 ? 'hour' : 'hours';
  }
  
    var min = function(num) {
    var minute = num%60
    return minute === 1 ? 'minute' : 'minutes';
    }