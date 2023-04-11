import { Queue } from "./02_ADT_队列"

export class TreeNode {
  left?: TreeNode | null
  right?: TreeNode | null
  parent?: TreeNode | null
  value: number
  constructor(value: number) {
    this.value = value
  }
}

export function generateBalancedBinaryTree(nodeValues: number[]) {
  // 生成平衡二叉树，使用队列
  const queue = new Queue<TreeNode | null>()
  // 头节点变量
  let node: TreeNode | null = null
  // 生成节点数组
  const treeNodes = nodeValues.map(val => {
    return new TreeNode(val)
  })
  // 根据节点数组循环生成平衡二叉树
  treeNodes.forEach((curNode, idx) => {
    // 1 如果是首次加入，表示为头节点，设置给node，并入队然后跳过本次循环
    if (idx === 0) {
      curNode.parent = null
      node = curNode
      queue.enqueue(curNode)
      return
    }
    // 2.取出队首
    const frontNode = queue.front()
    // 3.判断队首左右子树是否为空
    if (!frontNode?.left) {
      if (frontNode) {
        frontNode.left = curNode
        curNode.parent = frontNode
      }
    } else if (!frontNode?.right) {
      frontNode.right = curNode
      curNode.parent = frontNode
    }
    // 4.判断队首左右节点是否均为空
    if (frontNode?.left && frontNode.right) {
      queue.dequeue()
    }
    // 5.新节点入队
    queue.enqueue(curNode)
  })
  // 返回头节点
  return node as unknown as TreeNode
}