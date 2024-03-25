import LinkedList from "./linkedList.js";
import showList from "./showList.js";

const myLinkedList = new LinkedList();

myLinkedList.append(23);
myLinkedList.append(25);
myLinkedList.append(24);
myLinkedList.prepend(100);

console.log(myLinkedList.toString());
