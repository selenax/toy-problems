var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.\
  this.storage = {};
  this.key = 0;
  this.firstItem = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

Queue.prototype.dequeue = function() {
  if (this.size() <= 0) { return; }
  var removeItem = this.storage[this.firstItem];
  delete this.storage[this.firstItem];
  this.firstItem++;
  return removeItem;
};

Queue.prototype.size = function() {
  return this.key - this.firstItem;
};