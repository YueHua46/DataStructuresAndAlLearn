/**
 * 所谓后继节点，就是指按照中序遍历中，指定节点的后一位遍历节点则是该节点的后继节点
 */
/**
 * 不通过中序遍历来实现找出后继节点
 * 原因是：中序遍历时间复杂度是O(N)
 * 而我们想要实现的是时间复杂度是O(K)，K是指定节点与其后继节点的最远距离
 * 注意：
 *  其二叉树的每一个节点，都具备parent（父节点），这是这道题的规定之一
 */
/**
 * 实现思路：
 * 对于一个节点x，他的后继节点条件有2个
 * 1.如果x有右子树，则后继节点是x的右子树的最左子树
 * 2.如果x没有右子树，则表明x是后继节点的左节点的最右节点，
 *  那么寻找x的祖先节点是其祖先的父的左子树时，该祖先的父节点则是该x的后继节点
 * 3.第三种情况是，如果第1和第2条件都没有实现，则说明该节点一定是整棵树的最右节点
 *   即时，则直接返回null
 */
import { TreeNode, generateBalancedBinaryTree } from '../20_生成平衡二叉树'

const nodeValues = [1, 2, 3, 4, 5, 6, 7]
const node = generateBalancedBinaryTree(nodeValues)
console.log('before node value', node.left?.left); // 4，后继是2

function getSuccessorNode(node: TreeNode | null | undefined) {
  // 1.如果该node有右子树，则返回该右子树的最左子树
  if (node?.right) {
    return getLeftNode(node.right)
  }
  // 2.如果x没有右子树，则表明x是后继节点的左节点的最右节点
  // 往上找x的祖先节点，直到该祖先节点是父节点的左子节点，且该节点非x的左子树，则直接返回
  let curParent = node?.parent
  while (curParent) {
    if (curParent?.parent?.left === curParent) {
      // 如果if为true，则表明该祖先节点是其父节点的左子树，则直接返回该祖先节点的父节点
      return curParent
    } else {
      // 否则继续往上爬，直到为空
      curParent = curParent.parent
    }
  }
  // 如果targetNode不为空，则说明已找到其后继节点，否则x肯定满足条件3（既是其树中的最右节点，没有后继节点）
}

// 递归方式获取最左节点
function getLeftNode(node: TreeNode | null | undefined): TreeNode | null | undefined {
  if (node === null) return node
  if (node?.left) {
    return getLeftNode(node.left)
  } else {
    return node
  }
}

const targetNode = getSuccessorNode(node.left?.left)
console.log('targetNode', targetNode?.value);
