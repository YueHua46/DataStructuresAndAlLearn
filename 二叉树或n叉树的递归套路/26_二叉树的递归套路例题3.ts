// 例题3:
/**
 * 给定一棵二叉树的头节点head
 * 返回这棵二叉树中最大的二叉搜索子树的节点数量(大小)
 */
/**
 * 可能性:
 *  1) 与x无关(头节点不是x)
 *    ①: 左树的二叉搜索树的总大小(节点数)
 *    ②: 右树的二叉搜索树的总大小(节点数)
 *  2) 与x有关(头节点是x)
 *      条件1: 左树整体必须是二叉搜索树
 *      条件2: 右树整体必须是二叉搜索树
 *      条件3: 左树最大值(某个节点值比其他节点都大) > x > 右树最大值(某个节点值比其他节点都大)
 *    ③: 以上条件均成立,则其所有节点数便是: 左树所有节点树 + 1 + 右树所有节点数
 * 得出信息体:
 *   根据以上3个不同的可能性来看,我们可以总结我们需要向子树要什么信息
 *     1.对于左子树而言,我们需要以下信息:
 *       - 左子树中BST的总大小(节点数)
 *       - 是否为BST
 *       - 左子树中最大值(用于第2种可能性时作为条件判断)
 *     2.对于右子树而言,我们需要以下信息:
 *       - 右子树中BST的总大小(节点数)
 *       - 是否为BST
 *       - 右子树中的最小值(用于第2种可能性时作为条件判断)
 *   根据这2个信息,然后我们计算其信息的并集,便是我们最终要的信息体结构
 */

import { TreeNode } from "./20_生成平衡二叉树";

// 信息类型
interface InfoType {
  // 树中二叉树的最大节点数
  maxSubBSTSize: number
  // 当前树是否为BST
  isAllBST: boolean
  // 子树的最大值
  max: number
  // 子树的最小值
  min: number
}
// 信息结构体
class Info implements InfoType {
  maxSubBSTSize: number;
  isAllBST: boolean;
  max: number;
  min: number;
  constructor(maxSubBSTSize: number, isAllBST: boolean, max: number, min: number) {
    this.maxSubBSTSize = maxSubBSTSize
    this.isAllBST = isAllBST
    this.max = max
    this.min = min
  }
}


// 主函数,实现返回这棵树中BST的最大节点数
function getBSTAllNodeNum(x: TreeNode) {
  return process(x)?.maxSubBSTSize
}
// 递归函数
function process(x: TreeNode | null | undefined): Info | null {
  // 如果节点为空,则直接返回null(如果能够正常返回结构体,便正常返回结构体,否则为空)
  if (x == null) {
    return null
  }
  // 假设我能够拿到信息(先假设)
  let leftInfo = process(x.left)
  let rightInfo = process(x.right)

  // 求子树的最大值与最小值
  let max: number = x.value
  let min: number = x.value
  if (leftInfo != null) {
    max = Math.max(max, leftInfo.max)
    min = Math.min(min, leftInfo.min)
  }
  if (rightInfo != null) {
    max = Math.max(max, rightInfo.max)
    min = Math.min(min, rightInfo.min)
  }

  // 求子树中BST最大的节点数
  let maxSubBSTSize = 0
  if (leftInfo != null) {
    maxSubBSTSize = leftInfo.maxSubBSTSize
  }
  if (rightInfo != null) {
    maxSubBSTSize = Math.max(maxSubBSTSize, rightInfo.maxSubBSTSize)
  }

  // 求当前树是否为BST
  /**
   * 条件1: 左树整体必须是二叉搜索树
   * 条件2: 右树整体必须是二叉搜索树
   * 条件3: 左树最大值 < x < 右树最小值
   */
  let isAllBST = false
  if (
    // 条件1
    (leftInfo == null ? true : leftInfo.isAllBST) &&
    // 条件2
    (rightInfo == null ? true : rightInfo.isAllBST) &&
    // 条件3
    (leftInfo == null ? true : leftInfo.max < x.value) &&
    (rightInfo == null ? true : rightInfo.min > x.value)
  ) {
    // 可能性3成立
    // 最大节点数便成了 左的最大节点数 + 当前节点本身 + 右的最大节点数
    maxSubBSTSize =
      (leftInfo == null ? 0 : leftInfo.maxSubBSTSize)
      +
      (rightInfo == null ? 0 : rightInfo.maxSubBSTSize)
      + 1
    // 当前树为BST
    isAllBST = true
  }



  return new Info(maxSubBSTSize, isAllBST, max, min)
}