class Node {
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST {
    constructor(value=null){
        this.root=value
    }
}

const node1=new Node(3)
const node2=new Node(9)
const node3=new Node(20)
const node4=new Node(15)
const node5=new Node(7)


node1.left=node2
node1.right=node3
node3.left=node4
node3.right=node5

const tree=new BST(node1)


var maxDepth = function(root) {
    if(root === undefined || root===null){
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};

console.log(maxDepth(tree.root))