// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let newstr = '';
  str = str.toLowerCase().split(' ')
  console.log(str)
  for(let x = 0; x < str.length; x++) {
     newstr += str[x][0].toUpperCase() + str.slice(1) + ' ';
  }
  return newstr.trim();
}

function titleCase(str) { 
  let result = str.toLowerCase().split(' ');
  return result.map((element) => element.replace(element[0], element[0].toUpperCase())).join(' ')

}

console.log(titleCase("I'm a little tea pot"));

