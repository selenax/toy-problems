function sameFrequency(num1, num2) {
  let val1 = num1.toString();
  let val2 = num2.toString();
  let hash = {};
  if (val1.length !== val2.length) return false;
  let obj1 = hashMap(val1);
  let obj2 = hashMap(val2);
  for (let [key, value] of Object.entries(obj1)) {
    if (obj2[key] !== value) {
      return false;
    }
  }
  return true;
}

function hashMap(arr) {
  let hash = {};
  for (let val of arr) {
    hash[val] = ++hash[val] || 1;
  }
  return hash;
}

console.log(sameFrequency(181, 118)); // true
console.log(sameFrequency(181, 180)); // false
console.log(sameFrequency(123353, 313235)); // true

