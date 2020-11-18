// * time O(N^2)
function selectionSort(arr) {
  for(let x = 0; x < arr.length; x++) {
    let lowest = x;
    for(let y = x + 1; y < arr.length; y++) {
      if(arr[lowest] > arr[y]) {
        lowest = y;
      }
    }
    let temp = arr[x];
    arr[x] = arr[lowest];
    arr[lowest] = temp;
    }
    return arr;
  }

// * refactor
function selectionSort(arr) {
  const swap = (arr, index1, index2) =>
    ([arr[index1], arr[index]] = [[arr[index2], arr[index1]]]);
  for (let x = 0; x < arr.length; x++) {
    let lowest = x;
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[lowest] > arr[y]) {
        y = lowest;
      }
    }
    // in the case we are starting with the lowest, we could skip the swap
    if (lowest !== x) {
      swap(arr, x, lowest);
    }
  }
  return arr;
}

console.log(selectionSort([7, 4, 1, 5, 4]));
