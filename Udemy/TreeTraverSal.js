//Breadth First Search

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
    BFS() {
        let currentNode = this.root
        let queue = []
        let result = []
        queue.push(currentNode)
        while (queue.length) {
            currentNode = queue.shift()
            result.push(currentNode.value)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
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

console.log(tree.BFS())