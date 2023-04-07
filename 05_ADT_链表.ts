// Linked List ADT
// 链表是ADT中常见的一种，存储的是节点，节点空间内存储着有当前节点的值和下一节点的指针
// 链表相关知识补充：https://www.freecodecamp.org/chinese/news/implementing-a-linked-list-in-javascript/
class LinkedNode {
  value: number;
  next: LinkedNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

export class LinkedList {
  head: LinkedNode | null;
  constructor(head: LinkedNode) {
    this.head = head;
  }
  // 接下来，我们将为链表实现四个 helper 方法：
  // size()
  // clear()
  // getLast()
  // getFirst()

  // 1.返回链表存在的节点数
  size() {
    let count = 0;
    let curNode = this.head;
    while (curNode) {
      count++;
      curNode = curNode.next;
    }
    return count;
  }
  // 2.清空链表
  clear() {
    this.head = null;
  }
  // 3.返回链表中最后一个节点
  getLast() {
    let lastNode = this.head;
    while (lastNode) {
      if (!lastNode.next) {
        break;
      }
      lastNode = lastNode.next;
    }
    return lastNode;
  }
  // 4.返回链表中的第一个元素
  getFirst() {
    return this.head;
  }

  // 接下来，我们还要再为链表实现插入操作
  // 1.插入到head
  // 时间复杂度：O(1)，不用循环，所以是恒定时间
  insertHead(element: LinkedNode) {
    element.next = this.head;
    this.head = element;
  }
  // 2.插入到指定索引处
  // 时间复杂度：O(N)，因为要循环到该指定索引处
  insertBetween(index: number, element: LinkedNode) {
    let curNode = this.head;
    let curIndex = 0;
    let afterNode: LinkedNode | null = null;
    while (curNode) {
      curIndex++;
      if (curIndex === index) {
        afterNode = curNode.next;
        curNode.next = element;
        element.next = afterNode;
      }
      curNode = curNode.next;
    }
  }
  // 3.插入到末尾处
  // 时间复杂度：O(N)，因为要循环到末尾处再进行插入操作
  insertLast(element: LinkedNode) {
    let curNode = this.head;
    while (true) {
      if (!curNode?.next) {
        curNode?.next ?? element;
        break;
      }
      curNode = curNode.next;
    }
  }
  // 4.插入到指定节点后
  // 时间复杂度：O(1)，因为已知节点，所以是恒定时间
  insertNodeAfte(node: LinkedNode, element: LinkedNode) {
    let afterNode = node.next;
    node.next = element;
    element.next = afterNode;
  }
}
// 初始化node
const linkedNode1 = new LinkedNode(5);
const linkedNode2 = new LinkedNode(10);
const linkedNode3 = new LinkedNode(15);
// 指定node指针
linkedNode1.next = linkedNode2;
linkedNode2.next = linkedNode3;

const linkedList = new LinkedList(linkedNode1);
console.log("linkedList1", linkedList?.head?.value);
console.log("linkedList2", linkedList?.head?.next?.value);
console.log("linkedList3", linkedList?.head?.next?.next?.value);
console.log("linkedList3 and next", linkedList?.head?.next?.next?.next?.value);

console.log("linkedList.size:", linkedList.size());
console.log("linkedList.lastNode:", linkedList.getLast());
console.log("linkedList.fristNode:", linkedList.getFirst());
linkedList.clear();
console.log("linkedList.size:", linkedList.size());
