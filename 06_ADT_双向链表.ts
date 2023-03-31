// 双向链表
// 既在链表节点上增加记录上一个节点的结构

class DoublyLinkedNode {
  value: number;
  next: DoublyLinkedNode | null = null;
  previous: DoublyLinkedNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

class DoublyLinked {
  head: DoublyLinkedNode | null;
  constructor(head: DoublyLinkedNode) {
    this.head = head;
  }
}

// 初始化node
const doublyLinkedNode1 = new DoublyLinkedNode(5);
const doublyLinkedNode2 = new DoublyLinkedNode(10);
const doublyLinkedNode3 = new DoublyLinkedNode(15);
// 指定node指针
doublyLinkedNode1.next = doublyLinkedNode2;
doublyLinkedNode1.previous = null;

doublyLinkedNode2.next = doublyLinkedNode3;
doublyLinkedNode2.previous = doublyLinkedNode1;

doublyLinkedNode3.next = null;
doublyLinkedNode3.previous = doublyLinkedNode2;
