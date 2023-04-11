import { DoublyLinked, DoublyLinkedNode } from "../06_ADT_双向链表";
import { Queue } from '../02_ADT_队列'
import { buildPerfectBinaryTree } from "../13_binarySearchTreeCreate";
const linked = [1, 2, 3, 4, 5, 6, 7]
// 获得二叉树
const root = new DoublyLinked(buildPerfectBinaryTree(linked))

// 使用宽度优先遍历二叉树，并获得最大宽度（哪一层节点数最大则为最大宽度）
// 实现思路：
// 1）使用Map来记录节点所对应的层数（key是node，value是level）
// 2）使用flag来记录一层的结束
/** 
 * 实现过程：
 *  1.准备一个Map来存储node与其对应的level层数（map）
 *  2.准备一个队列，用于存储节点（queue）
 *  3.头节点入队，头节点记录入map
 *  4.准备一个变量记录当前正在统计的层数（level）
 *  5.准备一个变量记录当前统计的层数其最大宽度（levelMax）
 *  6.准备一个变量记录当前统计的最大宽度（max）
 *  7.循环执行以下操作（循环条件为队列不为空）
 *    7.1：队列出队并检查该节点是否存在左右子节点（存在则记录其level到Map并入队）
 *    7.2：检查当前节点层数是否为当前正在记录统计的层数
 *      7.2.1：是则当前统计的层数宽度+1
 *      7.2.2：不是则表明上一层数已经结束，则直接将max与上一层数的最大宽度比较，最大的宽度赋值与max
 *             然后将当前统计的层数+1，当前统计的宽度设置为1（1是因为当前循环的节点已经是下一层的而不是上一层的）
 *  8.执行7.2.2操作，原因是当处于最后一个节点时，队列实际处于空，无法进入判断，但最大宽度不是最新的，所以需要更新一次
 */
function levelMaxWidth(head: DoublyLinkedNode | null) {
  // 1.准备一个Map来存储node与其对应的level层数（map）
  const map = new Map()
  // 2.准备一个队列，用于存储节点（queue）
  const queue = new Queue<DoublyLinkedNode | null | undefined>()
  // 3.头节点入队，头节点记录入map
  map.set(head, 0)
  queue.enqueue(head)
  // 4.准备一个变量记录当前正在统计的层数（level）
  let curLevel = 0
  // 5.准备一个变量记录当前统计的层数其最大宽度（levelMax）
  let curLevelMax = 0
  // 6.准备一个变量记录当前统计的最大宽度（max）
  let max = 0
  // 7.循环执行以下操作（循环条件为队列不为空）
  while (!queue.isEmpty()) {
    // 7.1：队列出队并检查该节点是否存在左右子节点（存在则记录其level到Map并入队）
    const root = queue.front()
    const curNodeLevel = map.get(root)
    queue.dequeue()
    if (root?.previous) {
      map.set(root.previous, curNodeLevel + 1)
      queue.enqueue(root.previous)
    }
    if (root?.next) {
      map.set(root.next, curNodeLevel + 1)
      queue.enqueue(root.next)
    }
    // 7.2：检查当前节点层数是否为当前正在记录统计的层数
    if (curNodeLevel === curLevel) {
      // 7.2.1：是则当前统计的层数宽度 + 1
      curLevelMax += 1
    } else {
      // 7.2.2：不是则表明上一层数已经结束，则直接将max与上一层数的最大宽度比较，最大的宽度赋值与max
      // 然后将当前统计的层数+1，当前统计的宽度设置为1（1是因为当前循环的节点已经是下一层的而不是上一层的）
      max = Math.max(max, curLevelMax)
      curLevel += 1
      curLevelMax = 1
    }
  }
  // 8.执行7.2.2操作，原因是当处于最后一个节点时，队列实际处于空，无法进入判断，但最大宽度不是最新的，所以需要更新一次
  return Math.max(max, curLevelMax)
}
const max = levelMaxWidth(root?.head)
console.log('max', max);


