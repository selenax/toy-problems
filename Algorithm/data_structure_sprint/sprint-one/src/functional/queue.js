//FIFO

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  var firstItem = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;

  };

  someInstance.dequeue = function() {
    if (someInstance.size() <= 0) { return; }
    var removeItem = storage[firstItem];
    delete storage[firstItem];
    firstItem++;
    return removeItem;

  };

  someInstance.size = function() {
    return key - firstItem;
  };

  return someInstance;
};
