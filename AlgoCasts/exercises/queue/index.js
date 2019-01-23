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
// NOTE: store using hash
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
// NOTE: pseudoclassical
function Queue() {
  this.data = [];
}
Queue.prototype.add = function(record) {
  this.data.unshift(record);
};
Queue.prototype.remove = function() {
  return this.data.pop();
};

// NOTE: es6
class Queue {
  constructor() {
    this.data = [];
  }
  //enqueue
  add(value) {
    this.data.unshift(value);
  }
  //dequeue
  remove() {
    return this.data.pop();
  }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
console.log(q); //[3,2,1]
console.log(q.remove()); // returns 1;
console.log(q); //[3,2]

module.exports = Queue;
