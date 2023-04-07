// 二叉树打印（满二叉树打印）
// Video To：https://www.bilibili.com/video/BV1Ef4y1T7Qi/?p=9&spm_id_from=pageDriver&vd_source=43fe569e273b8209e736262ea5df33ee

import { DoublyLinked, DoublyLinkedNode } from "./06_ADT_双向链表";
import { buildPerfectBinaryTree } from "./13_binarySearchTreeCreate";
const linked = [1, 2, 3, 4, 5, 6, 7]
// 获得二叉树
const root = new DoublyLinked(buildPerfectBinaryTree(linked))
console.log('root', root);

// 遍历二叉树函数

/**
 * 大概需要分3个函数分别做3件事
 * 1.第一个函数为printTree
 *    作用只是为了标记二叉树的遍历开始，打印二叉树开始提示，并将头节点通过printInOrder传递调用
 * 2.第二个函数为printInOrder
 *    作用是实现了根据传递的root和其所在的层级（height），并根据 "H"（头节点） 或 "↑"（左子节点） 或 "↓"（右子节点）等参数
 *    来标记其应该在何处打印，其属于谁的左子树或右子树
 * 3.第三个函数为getSpace
 *    第三个函数是为了辅助第二个参数用的，作用是根据传入的数值来决定应当返回多少个空格以便区分树的层次感
 */

printTree(root.head)

function printTree(head: DoublyLinkedNode | null) {
  console.log('-- Binary Search Tree Traversal --')
  printInOrder(head, 0, 'H', 17)
  console.log('')
}
function printInOrder(head: DoublyLinkedNode | null, height: number, type: string, len: number) {
  // 遍历顺序：右 --> 根 --> 左
  if (head === null) {
    return head
  }
  // 1.递归遍历右
  printInOrder(head.next, height + 1, '↑', len)
  // 2.打印根
  let val = `${type}${head.value}${type}`
  let lenL = (len - val.length) / 2
  let lenR = len - lenL - val.length
  val = getSpace(lenL) + val + getSpace(lenR)
  console.log(getSpace(height * len) + val);
  // 3.递归遍历左
  printInOrder(head.previous, height + 1, '↓', len)
}

function getSpace(len: number) {
  let str = ' '
  for (let index = 0; index < len; index++) {
    str += ' '
  }
  return str
}