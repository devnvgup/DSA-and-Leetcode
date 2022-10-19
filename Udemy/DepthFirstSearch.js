class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root == null) {
            this.root = newNode
            return this
        }
        let tmp = this.root
        while (true) {
            if (newNode.value === tmp.value) return undefined
            if (newNode.value < tmp.value) {
                if (tmp.left === null) {
                    tmp.left = newNode
                    return this
                }
                tmp = tmp.left
            } else {
                if (tmp.right === null) {
                    tmp.right = newNode
                    return this
                }
                tmp = tmp.right
            }
        }
    }
    depthFirstSearchPreOrder(){
        let result=[]
        function traverse(currentNode){
            result.push(currentNode.value)
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return result
    }
    depthFirstSearchPostOrder(){
        let result=[]
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
            result.push(currentNode.value)
        }
        traverse(this.root)
        return result
    }
    depthFirstSearchInOrder(){
        let result=[]
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            result.push(currentNode.value)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return result
    }
}

const tree = new BST()
tree.insert(47)
tree.insert(21)
tree.insert(76)
tree.insert(18)
tree.insert(27)
tree.insert(52)
tree.insert(82)

console.log(tree.depthFirstSearchInOrder())