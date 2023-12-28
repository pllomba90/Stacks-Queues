/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  /** push(val): add new value to the top of the stack. */
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Throws an error if the stack is empty. */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    const removed = this.first;
    this.first = this.first.next;
    this.size--;
    return removed.val;
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
