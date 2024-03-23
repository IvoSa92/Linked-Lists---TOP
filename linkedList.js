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
}

export default LinkedList;
