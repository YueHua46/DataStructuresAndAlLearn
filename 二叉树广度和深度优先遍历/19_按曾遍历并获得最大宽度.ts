// 使用宽度优先遍历二叉树，并获得最大宽度（哪一层节点数最大则为最大宽度）

import { DoublyLinked, DoublyLinkedNode } from "../06_ADT_双向链表";
import { Queue } from '../02_ADT_队列'
import { buildPerfectBinaryTree } from "../13_binarySearchTreeCreate";
const linked = [1, 2, 3, 4, 5, 6, 7]
// 获得二叉树
const root = new DoublyLinked(buildPerfectBinaryTree(linked))
// 实现思路：
// 1）使用Map来记录节点所对应的层数（key是node，value是level）
// 2）使用flag来记录一层的结束
/** 
 * 实现过程：
 * 
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

