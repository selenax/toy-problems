// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;


//FIFO
//remove: delete from front 
class Queue {
  constructor() {
    this.storage = {};
    this.first = 0;
  }

  add(value) {
    this.storage[this.first] = value;
    this.first++;
  }

  remove() {
    this.first--;
    var removeItem = this.storage[this.first];
    delete this.storage[this.first];
    return removeItem;
  }
}

// refactor:


class Queue {
  constructor() {
    this.storage = {};

  }
  //add to 
  add(value) {
    this.storage.unshift(value)
  }

  remove() {
    this.storage.shift();
  }
}


module.exports = Queue;
