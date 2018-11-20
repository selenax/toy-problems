
const binarySearch = function(array, element, start, end) {
  let start = start || 0;
  let end = end || array.length-1;
  let midpoint = Math.floor((end+start)/2);

  if(array[midpoint] === element) {
    return midpoint;
  }
  if(array[midpoint] > element) {
    return binarySearch(array, element, start, midpoint-1) 
  } else {
    return binarySearch(array, element, midpoint+1, end)
  }
}