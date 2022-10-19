class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor(value = null) {
      this.root = value;
    }
  }
  
  const node1 = new Node(7);
  const node2 = new Node(4);
  const node3 = new Node(3);
  const node4 = new Node(6);
  const node5 = new Node(19);
  
  node1.left = node2;
  node1.right = node3;
  node3.left = node4;
  node3.right = node5;
  
  const tree1 = new BinaryTree(node1);
  const tree2 = new BinaryTree(node1);
  
  var getTargetCopy = function (original, cloned, target) {
    function traverse(oNode, cNode) {
      if (!oNode) return;
      if (oNode === target) return cNode;
      return (
        traverse(oNode.left, cNode.left) || traverse(oNode.right, cNode.right)
      );
    }
    return traverse(original, cloned);
  };
  
  console.log(getTargetCopy(tree1.root, tree2.root, node3));



  // var getTargetCopy = function(original, cloned, target) {
  
  //   let queue = [[original, cloned]];
  
  //   while(queue.length) {
  //       const next = [];
  
  //       for(let [oNode, cNode] of queue) {
  //           if(oNode === target) return cNode;
  //           if(oNode.left) next.push([oNode.left, cNode.left]);
  //           if(oNode.right) next.push([oNode.right, cNode.right]);
  //       }
  //       queue = next;
  //   }
  // };
  