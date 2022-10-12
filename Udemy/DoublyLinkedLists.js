class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        let tmp = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next=null
            tmp.prev = null
        }
        this.length--
        return tmp
    }
    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    shift() {
        if (!this.head) return undefined
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            let tmp = this.head
            this.head = tmp.next
            this.head.prev = null
            tmp.next = null
        }
        this.length--
        return this
    }
    get(index) {
        if (index < 0 || index > this.length) return undefined
        let tmp = this.head
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                tmp = tmp.next
            }
        } else {
            tmp = this.tail
            for (let i = this.length - 1; i > index; i++) {
                tmp = tmp.prev
            }
        }
        return tmp
    }
    set(index, value) {
        let tmp = this.get(index)
        if (tmp) {
            tmp.value = value
            return true
        }
        return false
    }
    insert(index, value) {
        if (index == 0) return this.unshift(value)
        if (index == this.length) return this.push(value)
        if (index < 0 || index > this.length) return false
        const newNode = new Node(value)
        const before = this.get(index - 1)
        const after = before.next
        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode
        this.length++
        return true
    }
    remove(index) {
        if (index == 0) return this.shift()
        if (index == this.length - 1) return this.pop()
        const before = this.get(index - 1)
        const tmp = before.next
        const after = tmp.next
        before.next = tmp.next
        after.prev = before
        tmp.next = null
        tmp.prev = null
        this.length--
        return true
    }
}

const newLL = new DoublyLinkList(1)
newLL.push(2)
newLL.push(3)
newLL.push(4)
newLL.push(5)
newLL.pop()

console.log(newLL)