// GIVEN 2 POSITIVE INTEGERS, FIND TWO NUMBER HAVE THE SAME FREQUENCY OF DIGITS

// input: 2 positive integers
// output: boolean 

// O(N^2) quadratic time 
function sameFrequency (num1, num2) {

  //create new arrays to store conversion of integers to string
    //if length of arrays aren't equal, return false; 

  //nested for loop to compare each value in arr1 to arr2 
    //if occurence of each digit match in num2, return true 
    //else return false if no match
  
  let arr1 = num1.toString().split('');
  let arr2 = num2.toString().split('');
  
  if(arr1.length !== arr2.length) { return false; }

  for(let x = 0; x < arr1.length; x++) {
    if(!arr2.includes(arr1[x])) {
      return false;
    }
  }
  return true;
}

// refactor: O(3N) => O(N)
function sameFrequency(num1, num2) {
  let arr1 = num1.toString().split('');
  let arr2 = num2.toString().split('');

  if(arr1.length !== arr2.length) { return false }

  let obj1 = hash(arr1) // {1:1, 8:1, 3:1}
  let obj2 = hash(arr2) // {2:1, 8:1, 1:1}

  for(let [key, value] of Object.entries(obj1)) {
    if(obj2[key] !== value) {
      return false
    }
  };
  return true;
}
//helper function
function hash(arr) {
  let hash = {};
  for(let value of arr) {
    hash[value] = ++hash[value] || 1;
  }  
  return hash;
}


console.log(sameFrequency(183, 281)); //false
console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(123, 455)); //false
console.log(sameFrequency(234, 232454)); //false
console.log(sameFrequency(22, 2222)); //false



// FIND DUPLICATES 

//input: string
//output: array of duplicated letters

function findDuplicates(words) {
  //if empty string or length === 1, return [];

  //loop over each letter in string 
    //create hash, assign letter as key 
      //if key exist, incrememt value by 1
      //if not, assign key to 1 

  //{m: 1, i: 4, s: 4, p: 2 }
  //loop over hash 
    //create array
    //push any key with value greater than 1 to array
  //return array

  if(words.length === 0 || words.lenth === 1) { return []; }

  let hash = {};
  let array = [];
  for(let letter of words) {
  //  if(hash[letter]) {
  //    hash[letter]++;  
  //    } else {
  //      hash[letter] = 1;
  //    }
  hash[letter] = ++hash[letter] || 1;
  }
   for(let key in hash) {
    if(hash[key] > 1) {
      array.push(key)
    }
   }
   return array;
}

  


console.log(findDuplicates("mississippi")); //['i', 's', 'p'];
console.log(findDuplicates("abca")); //[a]
console.log(findDuplicates("annual")); //[a, n]
console.log(findDuplicates("")); //[]
console.log(findDuplicates("a")); //[]


