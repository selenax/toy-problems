/* eslint-disable no-restricted-syntax */
// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    // reassign children so filter won't return a new children
    this.children = this.children.filter(node => node.data !== data);
  }
}
class Tree {
  constructor() {
    this.root = null; // start off with empty tree
  }

  traverseBF(fn) {
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      if (node.children) {
        for (const child of node.children) {
          queue.push(child);
        }
        // refactor to es6 instead of loop
        // queue.push(...node.children);
        fn(node);
      }
    }
  }

  traverseDF(fn) {
    const stack = [this.root];

    while (stack.length) {
      const node = stack.pop();
      fn(node);
      if (!node.children) {
        continue;
      }
      for (let x = node.children.length - 1; x >= 0; x--) {
        stack.push(node.children[x]);
      }
    }

    // refactor with es6
    //   while (stack.length) {
    //     const node = stack.shift();
    //     stack.unshift(...node.children);
    //     fn(node);
    //   }
    // }
  }
}

// Tree.prototype.traverse = function (callback) {
//   var stack=[this];
//   var n;

//   while(stack.length>0) {

//     n = stack.pop();
//     callback(n.value);

//     if (!n.children) {
//       continue;
//     }

//     for (var i = n.children.length-1; i>=0; i--) {
//        stack.push(n.children[i]);
//     }
//   }
// };

const tree = new Tree();
const node = new Node('a');
tree.root = node;
tree.root.add('b');
tree.root.add('c');
tree.root.children[0].add('d');
// tree.traverseBF(node => {
//   queue.push(node.data);
// }); //['a', 'b', 'c', 'd']);
// tree.traverseDF(node => {
//   stack.push(node.data);
// }); // ['a', 'b', 'd', 'c']

module.exports = { Tree, Node };
