class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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
    contains(value) {
        if (this.root === null) return false
        let tmp = this.root
        while (tmp) {
            if (value < tmp.value) {
                tmp = tmp.left
            } else if (value > tmp.value) {
                tmp = tmp.right
            } else {
                return true
            }
        }
        return false
    }
    minValueNode(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left
        }
        return currentNode
    }
}



