// 对于一个二叉搜索树，可使用数组或链表来存储
import { DoublyLinked, DoublyLinkedNode } from './06_ADT_双向链表'
const linked = [1, 2, 3, 4, 5, 6, 7]


export function buildPerfectBinaryTree(linked: number[]): DoublyLinkedNode | null {
  if (linked.length === 0) return null
  const midIndex = Math.floor(linked.length / 2)
  const root = new DoublyLinkedNode(linked[midIndex])
  root.previous = buildPerfectBinaryTree(linked.slice(0, midIndex))
  root.next = buildPerfectBinaryTree(linked.slice(midIndex + 1))
  return root
}
const root = new DoublyLinked(buildPerfectBinaryTree(linked))
console.log('root', root);

