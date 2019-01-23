// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

//FILO
class Stack {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    return this.data.pop();
  }

  // peek returns the first element but doesnt pop it
  peek() {
    return this.data[this.data.length - 1];
  }
}

// pseudoclassical
function Stack() {
  this.data = [];
}

Stack.prototype.push = function(value) {
  this.data.push(value);
};

Stack.prototype.pop = function() {
  return this.data.pop();
};

Stack.prototype.peek = function() {
  return this.data[this.data.length - 1];
};

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s); //[1,2,3]
s.pop();
console.log(s); //[1,2]
module.exports = Stack;
