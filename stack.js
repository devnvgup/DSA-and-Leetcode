class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  //Add element to top of stack
  push(element) {
    this.items[this.count] = element;
    this.count += 1;
    return this.count - 1;
  }
  //return and remove top element in stack
  //return udf if stack is empty
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    return deleteItem;
  }
  //check top element
  peek() {
    if (this.count == 0) return undefined;
    return this.items[this.count - 1];
  }
  //check if stack emty
  isEmty() {
    return this.count == 0;
  }
  //Check size of stack
  size() {
    return this.count;
  }
  //Print elemen in stack
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
  //clear stack
  clearStack(){
    this.count = 0
    this.items = []
    return true
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.print());
