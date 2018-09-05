class Stack {
  constructor() {
    this.storage = {};
    this.key = 0;
  }

  push(value) {
    this.storage[this.key] = value;
    this.key++;
  }

  pop() {
    this.size() && this.key--;
    var removeItem = this.storage[this.key];
    delete this.storage[this.key];
    return removeItem;
  }
  
  size() {
    return this.key;
  }
}