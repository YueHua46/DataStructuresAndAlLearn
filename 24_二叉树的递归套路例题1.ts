// 视频链接：https://www.bilibili.com/video/BV1Ef4y1T7Qi/?p=9&spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=43fe569e273b8209e736262ea5df33ee
/**
 * 二叉树的递归套路
 *  1) 假设以X节点为头，假设可以向X左树和X右树要任何信息
 *  2) 在上一步的假设下，讨论以X为头节点的树，得到答案的可能性(最重要)
 *  3) 列出所有可能性后，确定到底需要向左树和右树要什么样的信息
 *  4) 把左树信息和右树信息求全集，就是任何一棵子树都需要返回的信息S
 *  5) 递归函数都返回S，每-棵子树都这么要求
 *  6) 写代码，在代码中考虑如何把左树的信息和右树信息整合出整棵树的信息
 */

import { TreeNode } from "./20_生成平衡二叉树";


// 例题1：
// 给定一棵二叉树的头节点head，返回这棵二叉树是不是平衡二叉树
/**
 * 二叉树递归套路思路：
 * 1）假设可以向X左树和X右树要任何信息
 *  潜台词：
 *    左子树应当给我信息
 *    右子树应当也给我信息
 *  利用左树与右树给予我的信息，怎么样才能够求出是否是平衡树是我们应当考虑的
 * 2）基于1，得到答案的可能性
 *  解析题目：
 *    怎么算平衡二叉树？
 *    任意一棵左数与其右树的高度差不大于1（既小于2）
 *  那么根据题意可得出以下答案的可能性：（默认我能够向我的左树与右树要信息的前提）
 *    1.我的左树应当是平衡的（因为x的左树不平衡，则整个森林都棵树都不算平衡）
 *    2.我的右树应当是平衡的（因为x的右树不平衡，则整个森林都棵树都不算平衡）
 *    3.我的左树高度与右树高度差不大于1（ |左树-右树| < 2 ）
 *  3）列出所有可能性后，确定到底需要向左树和右树要什么样的信息
 *    1.左树是否平衡？
 *    2.左树高度是多少？
 *    3.右树是否平衡？
 *    4.右树高度是多少？
 */

// 基于我想要得到的信息来看，左树与右树所要的信息是相同的，所以可以构建出一个信息的结构体：
// 树的信息类型
interface InfoType {
  // 树是否平衡
  isBalaced: boolean
  // 树的高度
  height: number
}
// 树的信息结构体
class Info implements InfoType {
  isBalaced: boolean;
  height: number;
  constructor(isBalaced: boolean, height: number) {
    this.isBalaced = isBalaced
    this.height = height
  }
}

// 对于头节点node来讲，我们也要返回一个Info
function process2(node: TreeNode | null | undefined): Info {
  // 因为我们是递归函数的原因，我们对左右树都有返回信息的要求，那么作为一个递归函数，头节点本身也要返回这个信息
  // 如何返回这个信息，是我们应该考虑的重点之一
  if (node === null) {
    // 如果是空树，返回以下信息
    return new Info(true, 0)
  }
  // 去我子树拿信息
  let leftTreeInfo = process2(node?.left)
  let rightTreeInfo = process2(node?.right)
  // 得出我当前树的高度（计算方式是子树当中最高的再+1，1是算进当前树）
  let height = Math.max(leftTreeInfo.height, rightTreeInfo.height) + 1
  // 得出我当前树是否平衡性（我默认平衡性为false）
  let isBalaced = false
  // 判断我的子树是否平衡，如果是平衡，则我也是平衡
  if (leftTreeInfo.isBalaced && rightTreeInfo.isBalaced && (Math.abs((leftTreeInfo.height - rightTreeInfo.height)) + 1) < 2) {
    // 是平衡，当前树改为true
    isBalaced = true
  }
  // 返回我树的信息（如果我有父节点，那么它应当拿到这个信息）
  return new Info(isBalaced, height)
}
// 主函数
function isBalaced(head: TreeNode) {
  return process2(head).isBalaced
}
// 传递一个二叉树头节点
// isBalaced()