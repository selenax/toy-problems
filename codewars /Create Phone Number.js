
//Create Phone Number

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.



function createPhoneNumber(numbers){
  var area = numbers.slice(0, 3).join('');
  var first3 = numbers.slice(3, 6).join('')
  var last4 = numbers.slice(6).join('')
  return '('+area+')' + ' ' + first3 + '-' + last4;
}

//refactor
function createPhoneNumber(numbers) {
  var format = '(xxx) xxx-xxxx';
  for(var y = 0; y < numbers.length; y++) {
    format = format.replace('x', numbers[y])
  }
  return format;
}
  

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

  