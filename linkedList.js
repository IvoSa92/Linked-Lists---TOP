import Node from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    let node = new Node(value);

    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.nextNode = node;
    }

    this.tail = node;
    this.size++;

    console.log(`Append ${node.value}`);
  }

  prepend(value) {
    let node = new Node(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }

    this.size++;
    console.log(`Prepend ${node.value}`);
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index >= this.size) {
      return "your searched object is not in the list";
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    return current;
  }
}

export default LinkedList;
