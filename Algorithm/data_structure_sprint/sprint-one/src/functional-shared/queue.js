var extend = function(dest, source) {
  for(var key in source) {
    dest[key] = source[key];
  }
}

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.key = 0;
  someInstance.firstItem = 0;
  extend(someInstance, queueMethods);
  return someInstance;

};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },

  dequeue: function() {
    if (this.size() <= 0) { return; }
    var removeItem = this.storage[this.firstItem];
    delete this.storage[this.firstItem];
    this.firstItem++;
    return removeItem;
  },

  size: function() {
    return this.key - this.firstItem;
  }
};


