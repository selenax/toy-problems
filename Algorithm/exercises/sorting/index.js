// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
function bubbleSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    // prevent y from iterate out of bound, length - x - 1
    for (let y = 0; y < arr.length - x - 1; y++) {
      if (arr[y] > arr[y + 1]) {
        const less = arr[y + 1];
        arr[y + 1] = arr[y];
        arr[y] = less;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    let minIndex = x;
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < arr[minIndex]) {
        minIndex = y;
      }
    }
    // when minIndex = x, it means the inner loop didnt find a value that is less than value at index x
    if (minIndex !== x) {
      // we found a value smaller than arr[x]
      const less = arr[minIndex];
      arr[minIndex] = arr[x]; // swap min and current index
      arr[x] = less; // move minIndex to x
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

console.log(mergeSort([97, 0, 22, -30]));

module.exports = {
  bubbleSort,
  selectionSort,
  mergeSort,
  merge
};
