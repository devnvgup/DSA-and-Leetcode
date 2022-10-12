class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.lenght = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.lenght) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;
    let tmp = this.top;
    this.top = tmp.next;
    tmp.next = null;
    this.length--
    return tmp
  }
}
