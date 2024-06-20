class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  contains(element) {
    return this.stack.includes(element);
  }

  reverse() {
    return this.stack.reverse();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "=>";
    }
    return str;
  }
  top() {
    return this.stack[0];
  }
}

// useage

let myStack = new Stack();
myStack.push(4);
myStack.push(6);
myStack.push(8);
myStack.push(9);

console.log(myStack.printStack());

console.log(myStack.peek());
console.log(myStack.contains(5));
console.log(myStack.reverse());
console.log(myStack.isEmpty());
console.log(myStack.size());
// console.log(myStack.clear());
console.log(myStack.isEmpty());
console.log(myStack.printStack());

console.log("bottom item : ", myStack.top());
console.log("top item : ", myStack.peek());
