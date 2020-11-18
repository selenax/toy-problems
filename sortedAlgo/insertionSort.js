function insertionSort(arr) {
  const swap = (arr, index1, index2) => ([arr[index2], arr[index1]] = [arr[index1], arr[index2]])
  for(let x = 1; x < arr.length; x++) {
    let current = x;
    for(let y = x - 1; y >= 0; y--) {
      if(arr[current] < arr[y]) {
        swap(arr, y, current)
        current--;
      }
    }
  }
return arr;
}


console.log(insertionSort([3,1,5,2,3,8,4,7]));
