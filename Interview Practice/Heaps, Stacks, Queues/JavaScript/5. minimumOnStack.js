/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(operations) {
  const result = [];
  const minStack = new MinStack();

  operations.forEach((operation) => {
    if (operation === "min") {
      result.push(minStack.getMin());
    } else if (operation === "pop") {
      minStack.pop();
    } else {
      minStack.push(operation.split("push ")[1]);
    }
  });

  return result;
}

class MinStack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(Math.min(value, this.getMin()));
  }

  pop() {
    this.stack.pop();
  }

  getMin() {
    return this.stack.length ? this.stack[this.stack.length - 1] : Infinity;
  }
}
