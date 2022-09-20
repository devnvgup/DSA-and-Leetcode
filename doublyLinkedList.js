class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    this.size = 0;
  }
  clear() {
    let currentNode = this.head;
    while (currentNode != null) {
      let nextNode = currentNode.next;
      currentNode.next = null;
      currentNode.prev = null;
      currentNode.data = null;
      currentNode = nextNode;
    }
    this.head = this.tail = null;
    this.size = 0;
  }
  sizeLinklisted() {
    let count = 0;
    let nextNode = this.head;
    while (nextNode.next) {
      count++;
      nextNode = nextNode.next;
    }
    return count;
  }
  isEmty() {
    return this.sizeLinklisted() === 0;
  }
  //   add(element) {
  //     this.addLast(el)
  //   }
  addLast(element) {
    if (this.isEmty()) {
      this.head = this.tail = element;
    } else {
      this.tail.next = element;
      element.next = null;
      element.prev = this.tail;
    }
  }
  addFirst(element) {
    if (this.isEmty()) {
      this.head = this.tail = element;
    } else {
      this.head.prev = element;
      element.prev = null;
      element.next = this.head;
      this.head = element;
    }
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  insertNode(element, firstNode, tailNode) {
    element.next = tailNode;
    tailNode.prev = element;
    element.prev = firstNode;
    firstNode.next = element;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node0 = new Node(0);

let node7 = new Node(7);

node1.next = node2;
node1.prev = null;
node2.next = node3;
node2.prev = node1;
node3.next = null;
node3.prev = node2;

let dbLinkedList = new DoublyLinkedList(node1, node3);
dbLinkedList.addLast(node4);
dbLinkedList.addFirst(node0);
dbLinkedList.insertNode(node7, node0, node1);
console.log(dbLinkedList.head.next.next.data);

//solution2

class NodeList {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DBLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertValue(value) {
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return newNode;
    }
    this.head = this.tail = newNode;
    this.length++;
    return newNode;
  }

  remove() {
    if (this.tail) {
      this.length--;
      const removeTail = this.tail;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      return removeTail;
    }
    return false;
  }

  insertHead(value) {
    this.length++;
    let newNode = new NodeList(value);

    if (this.head) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  removeHead() {
    if (this.head) {
      this.length--;
      const removedHead = this.head;
      this.head = this.head.next;

      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }

      return removedHead;
    }
    return undefined;
  }

  insertIndex(value, index) {
    if (index >= this.length) {
      throw new Error("Insert index out of bounds");
    }

    if (index === 0) {
      return this.insertHead(value);
    }

    this.length++;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    const previousNode = currentNode.previous;
    const newNode = createNode(value);
    newNode.next = currentNode;
    newNode.previous = previousNode;
    previousNode.next = newNode;
    currentNode.previous = newNode;
    return newNode;
  }

  // remove at specific index

  removeIndex(index) {
    if (index >= this.length) {
      throw new Error("Remove index out of bounds");
    }

    if (index === 0) {
      return this.removeHead();
    }

    this.length--;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    const previousNode = currentNode.previous;
    const nextNode = currentNode.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    return currentNode;
  }
}
