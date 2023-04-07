import { DoublyLinked, DoublyLinkedNode } from "../06_ADT_双向链表";
import { buildPerfectBinaryTree } from "../13_binarySearchTreeCreate";
import { Stack } from '../07_ADT_栈'
const linked = [1, 2, 3, 4, 5, 6, 7]
// 获得二叉树
const root = new DoublyLinked(buildPerfectBinaryTree(linked))
console.log('root', root);

// 先序递归方式遍历二叉树
function preTraversal(head: DoublyLinkedNode | null) {
  // 先序遍历：根 -> 左 -> 右
  // root -> pre -> pos
  // 当前root如果是空，则直接返回
  if (head === null) {
    return
  }
  // 1.先打印root
  console.log(head?.value);
  // 2.左先递归执行
  preTraversal(head.previous)
  // 3.右再递归执行
  preTraversal(head.next)
}
// preTraversal(root.head)

// 非递归方式先序遍历二叉树
// 思路：使用栈来实现
/**
 * 程序思路：
 * 循环并按照以下步骤执行：
 *  1）弹出栈顶并打印
 *  2）有右压右（没有通过if来判断null直接返回）
 *  3）有左压左（没有通过if来判断null直接返回）
 * 退出条件：栈为空
 */
function preTraversal2(head: DoublyLinkedNode | null) {
  const stack = new Stack()
  // 首先将root根推入栈
  stack.push(head)
  // 然后循环执行程序
  while (!stack.isEmpty()) {
    // 1.弹出栈顶子树并打印
    const root = stack.pop()
    console.log(root.value);
    // 2.有右压右
    if (root?.next) {
      stack.push(root.next)
    }
    // 3.有左压左
    if (root?.previous) {
      stack.push(root.previous)
    }
  }
}
preTraversal2(root.head)