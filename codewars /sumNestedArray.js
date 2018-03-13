function sumNestedArray (array) {
    var arr = Array.prototype.concat.apply([], array)
    var result = [];
    for(var x = 0; x < arr.length; x+=2) {
        result.push(arr[x] + (arr[x] + 1));
    }
    return result;
}

console.log(sumNestedArray([[12,12],[6,6]]))