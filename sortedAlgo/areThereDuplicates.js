// accepts n # of args
// checks whether there are any duplicates among args that're passed in

// areThereDuplicates(1,2,3) // false
// areThereDuplicates(1,2,2) // true
// areThereDuplicates('a','b','c','a') // true

// restrictions:
// time - O(N)
// space - O(N)

function areThereDuplicates(...args) {
  args.sort((a, b) => a - b);
  for (let x = 0; x < args.length; x++) {
    if (args[x] === args[x + 1]) {
      return true;
    }
  }
  return false;
}

// refactor
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = ++collection[arguments[val]] || 1
  }
  
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

console.log(areThereDuplicates('a','b','c','a'));
console.log(areThereDuplicates(1, 2, 3, 2));
console.log(areThereDuplicates(1, 2, 3));