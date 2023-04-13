// 例题2：
/**
 * 给定一棵二叉树的头节点head，任何两个节点之间都存在距离，
 * 返回整棵二叉树的最大距离
 */
/**
 * 实现思路：
 *  可能性：
 *    1）不经过x（与x无关）
 *      ①：得出左树最大距离
 *      ②：得出右树最大距离
 *    2）经过x（与x有关）
 *      ①：左树高度（左树离根最远的节点到根的距离） + 1 + 右树高度（右树离根最远的节点到根的距离）
 *  可能性结果总共有两大分支，总计有3个可能性的结果
 *  基于这样的可能性，可以得出我们应该向子树要什么信息：
 *    ①：整棵树的最大距离
 *    ②：整棵树的高度
 */

import { TreeNode } from "./20_生成平衡二叉树";

// 子树信息类型
interface InfoType {
  maxDistance: number
  height: number
}
// 子树结构体
class Info implements InfoType {
  maxDistance: number;
  height: number;
  constructor(maxDistance: number, height: number) {
    this.height = height
    this.maxDistance = maxDistance
  }
}

// 主函数,只要最大距离
function maxDistance(node: TreeNode) {
  return process(node).maxDistance
}
// 执行递归的函数
function process(node: TreeNode | null | undefined): InfoType {
  if (node === null) {
    // 空树
    return new Info(0, 0)
  }

  // 去我左右树要信息
  let leftInfo = process(node?.left)
  let rightInfo = process(node?.right)

  // 结合我当前树的info
  // 1.得出我当前树的总高度
  let height = Math.max(leftInfo.height, rightInfo.height) + 1
  // 2.得出我当前树的最大距离
  let maxDistance = Math.max(
    // 不经过x的可能性处理
    Math.max(
      leftInfo.maxDistance, rightInfo.maxDistance
    ),
    // 经过x的可能性处理
    Math.max(
      leftInfo.height + 1 + rightInfo.height
    )
  )
  return new Info(maxDistance, height)
}