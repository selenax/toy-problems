
class Tree {
  constructor() {
    this.root = null;
  }

  // push to the front
  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseBF(fn) {
    const arr = [this.node];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }
}






Tree.prototype.traverse = function (callback) {
  var stack=[this];
  var n;

  while(stack.length>0) {

    n = stack.pop();
    callback(n.value);

    if (!n.children) {
      continue;
    }

    for (var i = n.children.length-1; i>=0; i--) {
       stack.push(n.children[i]);
    }
  }
};