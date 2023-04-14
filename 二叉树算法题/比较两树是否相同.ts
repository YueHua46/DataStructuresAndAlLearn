import { generateBalancedBinaryTree } from "../20_生成平衡二叉树";
import { printTree } from "../14_binarySearchTreeRender";
import { DoublyLinked, DoublyLinkedNode } from "../06_ADT_双向链表";
import { buildPerfectBinaryTree } from "../13_binarySearchTreeCreate";

const linked = [1, 2, 3, 4, 5, 6, 7];
const linked2 = [1, 2, 3, 4, 5, 6];
// 获得二叉树
const root = new DoublyLinked(buildPerfectBinaryTree(linked));
const root2 = new DoublyLinked(buildPerfectBinaryTree(linked2));

printTree(root.head);
printTree(root2.head);

/**
 * 思路：
 * 深搜两棵树
 *  比对当前的子树是否对等条件如下
 *   1、对于两边都是null的情况下，其为true（对等）
 *   2、对于有一边为空另一边不为空的情况下，其为false
 *   3、对于两边值不相同的情况下，返回false，否则为true
 */
/**
 * @param {DoublyLinkedNode} q
 * @param {DoublyLinkedNode} p
 * @return {boolean}
 */
export function isSameTree(
  q: DoublyLinkedNode | null,
  p: DoublyLinkedNode | null
): boolean {
  let flag = true;
  const dfs = (
    q: DoublyLinkedNode | null | undefined,
    p: DoublyLinkedNode | null | undefined
  ): boolean => {
    // 1.对于两边都为null的情况下，返回true
    if (q == null && p == null) {
      return true;
    } else if (q == null || p == null) {
      // 2.对于有一边为空，则返回false
      return false;
    } else if (q.value !== p.value) {
      return false;
    }
    return dfs(q?.previous, p?.previous) && dfs(q?.next, p?.next);
  };
  return dfs(q, p);
}

console.log(isSameTree(root.head, root2.head));
