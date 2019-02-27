// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {

  //  check to see length of str
  //  num is the length of max string 
  //  substring 2nd parameter is exclusive 
    //  so 0-8 return length of 9, but with substring 8 being excluded, str will return length 8;
  
  //  if len > num, return truncated str with '...'
  //else num < len return str

  return str.length > num ? `${str.substring(0, num)}...` : str;
 
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))