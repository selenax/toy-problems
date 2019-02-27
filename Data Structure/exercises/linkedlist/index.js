/* eslint-disable no-plusplus */
// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  // in case next wasn't passed in, should always default it to null
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property.
  insertFirst(data) {
    const node = new Node(data, this.head); // assign existing node as the next data with this.head
    // if no node, this.head will point to null
    this.head = node; // point head to new node
    // the above lines of code could be simplified to
    // this.head = new Node(data, this.head)

    // instead of the above code and we have insertAt
    // we could refactor to this.insertAt(data, 0)
  }

  // Returns the number of nodes in the linked list.
  size() {
    let counter = 0;
    let node = this.head; // reference first node

    while (node) {
      // if no head/null, will be falsy, while loop will not run
      counter++;
      node = node.next;
    }
    return counter;
  }

  // Returns the first node of the linked list.
  getFirst() {
    return this.head;
  }

  // Returns the last node of the linked list
  getLast() {
    if (!this.head) {
      return null;
    } // if there's no node in the list
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }

    // refactor: return this.getAt(this.size() - 1);
  }

  // Empties the linked list of any nodes.
  clear() {
    this.head = null;
  }

  // Removes only the first node of the linked list. The list's head should now be the second element.
  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  // Removes the last node of the chain
  removeLast() {
    // if empty list
    if (!this.head) return;
    // if list has 1 node
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    // remove last node by assigning it to null
    previous.next = null;
  }

  // Inserts a new node with provided data at the end of the chain
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // list is not empty
      last.next = new Node(data);
    } else {
      // list is empty!
      this.head = new Node(data);
    }
  }

  // Returns the node at the provided index
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    // return null if either head is null or index out of bound
    return null;
  }

  // Removes node at the provided index
  removeAt(index) {
    // edge case:  empty list,
    if (!this.head) return;

    // edge case: list has 1 node and index at 0
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    // edge case: index out of bound
    const previous = this.getAt(index - 1);
    console.log(previous);
    if (!previous.next) return;
    previous.next = previous.next.next;
  }

  // Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list.
  insertAt(data, index) {
    // edge case: empty list
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // if index out of bound, 1st condition would be falsy and we could grab the last element and add from back
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next); // since we are inserting in middle, previous.next was the original next node, which the new node should point at
    previous.next = node; // reassign previous next so that it's pointing at the new node
  }

  forEach() {
    // resume https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/learn/v4/t/lecture/8547168?start=0
  }
}

// const nodeOne = new Node();
const list = new LinkedList();
// list.head = nodeOne;
list.insertFirst(15);
list.insertFirst(10);
// list.insertFirst(16);
console.log(list);
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());
console.log(list.removeLast());
console.log(list);
console.log(list.removeAt(0));
console.log(list);
module.exports = { Node, LinkedList };
