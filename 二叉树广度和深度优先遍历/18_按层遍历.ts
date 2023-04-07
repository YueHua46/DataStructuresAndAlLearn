// 所谓层次遍历其实就是广度优先遍历
// 实现思路：用队列
// 通过flag来发现某一层的结束

import { DoublyLinked, DoublyLinkedNode } from "../06_ADT_双向链表";
import { Queue } from '../02_ADT_队列'
import { buildPerfectBinaryTree } from "../13_binarySearchTreeCreate";
const linked = [1, 2, 3, 4, 5, 6, 7]
// 获得二叉树
const root = new DoublyLinked(buildPerfectBinaryTree(linked))

/**
 * 实现过程：
 *  1）头节点先入队
 *  2）循环遍历队列（结束条件是队列为空）
 *    1.弹出队列节点并打印
 *    2.把弹出的节点的左子树压入后再压入右子树（前提是存在其左或右子树）
 */

function level(head: DoublyLinkedNode | null) {
  const queue = new Queue<DoublyLinkedNode | null | undefined>()
  // 1）头先入队
  queue.enqueue(head)
  // 2）循环遍历队列（结束条件是队列为空）
  while (!queue.isEmpty()) {
    // 1.弹出队列节点并打印
    const root = queue.front()
    queue.dequeue()
    console.log(root?.value);
    // 2.把弹出的节点的左子树压入后再压入右子树（如果不为空）
    if (root?.previous) {
      queue.enqueue(root?.previous)
    }
    if (root?.next) {
      queue.enqueue(root?.next)
    }
  }
}

level(root?.head)
