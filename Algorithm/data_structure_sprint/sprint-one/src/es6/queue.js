class Queue {
  constructor() {
    this.storage = {};
    this.first = 0;
    this.last = 0;
  }

  enqueue(value) {
    this.storage[this.last] = value;
    this.last++;
  }

  dequeue() {

    var removeItem = this.storage[this.first];
    delete this.storage[this.first];
    this.size() && this.first++;
    return removeItem;
  }

  size() {
    return this.last - this.first;
  }
}