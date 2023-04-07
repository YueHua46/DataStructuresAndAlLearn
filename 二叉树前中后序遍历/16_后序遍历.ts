import { DoublyLinked, DoublyLinkedNode } from "../06_ADT_双向链表";
import { Stack } from "../07_ADT_栈";
import { buildPerfectBinaryTree } from "../13_binarySearchTreeCreate";
const linked = [1, 2, 3, 4, 5, 6, 7]
// 获得二叉树
const root = new DoublyLinked(buildPerfectBinaryTree(linked))
console.log('root', root);

// 后序递归方式遍历二叉树
function posTraversal(head: DoublyLinkedNode | null) {
  // 后序遍历：左 -> 右 -> 根
  // pre -> pos -> root
  // 当前root如果是空，则直接返回
  if (head === null) {
    return
  }
  // 1.先递归调用左树
  posTraversal(head.previous)
  // 2.再递归调用右树
  posTraversal(head.next)
  // 3.再打印根（函数的最后一次回头）
  console.log(head.value);
}
// posTraversal(root.head)

// 非递归方式后序遍历二叉树
// 思路：使用栈来实现
/**
 * 程序思路：
 * 准备两个栈，一个用于遍历循环步骤，另一个用于保存待反转打印
 * 循环并按照以下步骤执行：
 *  1）第一个栈弹出并将弹出节点保存到反转栈中
 *  2）有右压右
 *  3）有左压左
 * 循环退出条件：第一个栈为空
 *  4）循环并弹出打印第二个栈直到空
 * 
 */
function posTraversal2(head: DoublyLinkedNode | null) {
  const stack = new Stack()
  const aidStack = new Stack()
  // 首先将root根推入栈
  stack.push(head)
  // 然后循环执行程序
  while (!stack.isEmpty()) {
    // 1）第一个栈弹出并将弹出节点保存到反转栈中
    const root = stack.pop()
    aidStack.push(root.value)
    // 2）有右压右
    if (root?.previous) {
      stack.push(root.previous)
    }
    // 3）有左压左
    if (root?.next) {
      stack.push(root.next)
    }
  }
  // 4）循环并弹出打印第二个栈直到空
  while (!aidStack.isEmpty()) {
    console.log(aidStack.pop());
  }
}
posTraversal2(root.head)