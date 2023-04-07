import { DoublyLinked, DoublyLinkedNode } from "../06_ADT_双向链表";
import { Stack } from "../07_ADT_栈";
import { buildPerfectBinaryTree } from "../13_binarySearchTreeCreate";
const linked = [1, 2, 3, 4, 5, 6, 7]
// 获得二叉树
const root = new DoublyLinked(buildPerfectBinaryTree(linked))
console.log('root', root);

// 中序递归方式遍历二叉树
function inTraversal(head: DoublyLinkedNode | null) {
  // 中序遍历：左 -> 根 -> 右
  // pre -> root -> pos
  // 当前root如果是空，则直接返回
  if (head === null) {
    return
  }
  // 1.先递归调用左树
  inTraversal(head.previous)
  // 2.再打印根（函数的最后一次回头）
  console.log(head.value);
  // 3.再递归调用右树
  inTraversal(head.next)
}
// inTraversal(root.head)

// 非递归方式中序遍历二叉树
/**
 * 思路：
 * 循环并执行以下步骤：
 * 循环进入条件（栈不为空或头节点不为空）
 *  1）如果头节点不为空
 *    1.入栈并将头节点的左子树设置为当前头节点
 *  2）如果头节点为空
 *    1.弹出栈并设置为头节点
 *    2.打印头节点
 *    3.将右子树设置为当前头节点
 * 整个逻辑中，实际实现的是：
 *  1.将整条左边界依次入栈
 *  2.直到边界为空时出栈并打印，去右树从头走一遍条件1-2
 */

function inTraversal2(head: DoublyLinkedNode | null) {
  const stack = new Stack()
  // 循环条件：栈不为空或头节点不为空
  while (!stack.isEmpty() || head !== null) {
    // 1）如果头节点不为空
    if (head !== null) {
      // 1.入栈并将头节点的左子树设置为当前头节点
      stack.push(head)
      head = head.previous as DoublyLinkedNode
    } else {
      // 2）如果头节点为空
      //  1.弹出栈并设置为头节点
      head = stack.pop()
      //  2.打印头节点
      console.log(head?.value);
      //  3.将右子树设置为当前头节点
      head = head?.next as DoublyLinkedNode
    }
  }
}
inTraversal2(root.head)