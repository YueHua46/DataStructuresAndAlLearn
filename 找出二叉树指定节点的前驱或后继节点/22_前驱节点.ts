/**
 * 前驱节点：
 *  所谓前驱节点，和后继相反，既找出基于中序遍历中，指定节点的前一个节点
 */
/**
 * 实现思路：
 *  与后继节点恰恰相反，所以实现过程大概如下：
 *  假设要寻找x节点的前驱节点，那么其前驱节点的寻找条件如下：
 *    1.x是否存在左子树，如果存在，则返回该左子树的最右节点
 *    2.如果不存在左子树，那么寻找x的祖先节点是其祖先的父的右子树时，该祖先的父节点则是该x的后继节点
 *       并且其不是x的右子树
 *    3.如果往上爬没有满足条件2，既没有寻找到祖先节点是其父的右子树，那么直接返回null
 */

import { TreeNode, generateBalancedBinaryTree } from '../20_生成平衡二叉树'

const nodeValues = [1, 2, 3, 4, 5, 6, 7]
const node = generateBalancedBinaryTree(nodeValues)
const targetNode = node.left
const previousNode = getPreviousNode(targetNode)

console.log(`目标节点：${targetNode?.value} 的前驱节点是：${previousNode?.value}`); // 2，前驱是4

function getPreviousNode(node: TreeNode | null | undefined) {
  // 1.x是否存在左子树，如果存在，则返回该左子树的最右节点
  if (node?.left) {
    return getRightNode(node.left)
  }
  // 2.如果不存在左子树，那么寻找x的祖先节点是其祖先的父的右子树
  // 时，该祖先的父节点则是该x的后继节点，并且其不是x的右子树
  let curParent = node?.parent
  while (curParent) {
    if (curParent?.parent?.right === curParent) {
      // 如果if为true，则表明该祖先节点是其父节点的左子树，则直接返回该祖先节点的父节点
      return curParent
    } else {
      // 否则继续往上爬，直到为空
      curParent = curParent.parent
    }
  }
  // 3.如果targetNode不为空，则说明已找到其后继节点，
  // 否则x肯定满足条件3（既是其树中的最右节点，没有后继节点）
  return curParent
}

function getRightNode(node: TreeNode | null | undefined): TreeNode | null | undefined {
  if (node === null) return node
  if (node?.right) {
    return getRightNode(node.right)
  } else {
    return node
  }
}