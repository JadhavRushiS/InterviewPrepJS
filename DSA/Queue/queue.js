class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  clear() {
    this.queue = [];
  }

  primtQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "-";
    }
    return str;
  }

  last() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.queue[this.queue.length - 1];
  }
}

// Usage
let myQueue = new Queue();
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);

console.log("original queue;  ", myQueue.primtQueue());

// console.log(myQueue.dequeue());

// console.log(myQueue.isEmpty());
// console.log(myQueue.size());
myQueue.enqueue(85);
console.log(myQueue.peek());
console.log(myQueue.primtQueue());
console.log("last item : ", myQueue.last());
