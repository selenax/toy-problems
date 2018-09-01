var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[value] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    
  };

  someInstance.size = function() {
  };

  return someInstance;
};
