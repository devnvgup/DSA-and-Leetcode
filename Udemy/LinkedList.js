//under the hood
//Constructors:

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  } 
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let tmp = this.head;
    let pre = this.head;
    while (tmp.next) {
      pre = tmp;
      tmp = tmp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return tmp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let tmp = this.head;
    this.head = this.head.next;
    tmp.next = null;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return tmp;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.next;
    }
    return tmp;
  }

  set(index, value) {
    let tmp = this.get(index);
    if (tmp) {
      tmp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    let tmp = this.get(index - 1);
    newNode.next = tmp.next;
    tmp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return undefined;
    const before = this.get(index - 1);
    let tmp = before.next;
    before.next = tmp.next;
    tmp.next = null;
    this.length--;
    return true;
  }

  reverse() {
    let tmp = this.head;
    this.head = this.tail;
    let next = tmp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = tmp.next;
      tmp.next = prev;
      prev = tmp;
      tmp = next;
    }
    return this
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const myLinkListed = new LinkedList(1);
myLinkListed.push(1);
myLinkListed.push(2);
myLinkListed.push(3);
myLinkListed.push(4);
myLinkListed.push(5);
console.log(myLinkListed.reverse());
//console.log(myLinkListed);
