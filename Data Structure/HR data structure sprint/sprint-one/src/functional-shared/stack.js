var extend = function(dest, source) {
  for (var key in source) {
    dest[key] = source[key];
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.key = 0;
  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },

  pop: function() {
    if (this.key <= 0) { return; }
    this.key--;
    var removeItem = this.storage[this.key];
    delete this.storage[this.key];
    return removeItem;
  },

  size: function() {
    return this.key;
  }

};
