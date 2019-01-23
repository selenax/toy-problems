//generate random number with no repetition 

var shuffle = function(array) { 
    var newArr = array.slice();
    var randIndices = Math.floor(Math.random() * newArr.length);

    for(var i = 0; i < newArr.length; i++) {
      var temp = newArr[randIndices];
      newArr[randIndices] = newArr[i];
      newArr[i] = temp;
    }
    return newArr;
  };
