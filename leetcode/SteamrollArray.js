function steamrollArray(arr) {
  let result = [];

  function checkArray(arg) {
    if (!Array.isArray(arg)) {
      result.push(arg);
    } else {
      for (let index in arg) {
        checkArray(arg[index]);
      }
    }
  }
  arr.forEach(checkArray);
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]

// console.log([1,2,[3]].flat())
