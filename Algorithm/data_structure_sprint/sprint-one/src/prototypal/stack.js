var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.key = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

stackMethods.pop = function() {
  if (this.key <= 0) { return; }
  this.key--;
  var removeItem = this.storage[this.key];
  delete this.storage[this.key];
  return removeItem;

};

stackMethods.size = function() {
  return this.key;
};
