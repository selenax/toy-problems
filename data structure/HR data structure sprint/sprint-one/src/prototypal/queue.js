var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.key = 0;
  someInstance.firstItem = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

queueMethods.dequeue = function() {
  if (this.size() <= 0) { return; }
  var removeItem = this.storage[this.firstItem];
  delete this.storage[this.firstItem];
  this.firstItem++;
  return removeItem;
};

queueMethods.size = function() {
  return this.key - this.firstItem;
};