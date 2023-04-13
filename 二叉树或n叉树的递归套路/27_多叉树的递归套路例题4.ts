import { Queue } from "../02_ADT_队列"
// 例题4：派对的最大快乐值问题
/**
 * 公司的每个员工都符合Employee类的描述。整个公司的人员结构可以看作
 * 是一棵标准的、没有环的多叉树。树的头节点是公司唯-的老板。除老板之
 * 外的每个员工都有唯一的直接上级。叶节点是没有任何下属的基层员工
 * (subordinates列表为空)，除基层员工外，每个员工都有一个或多个直接下级。
 * 
 * 这个公司现在要办party，你可以决定哪些员工来，哪些员工不来，规则:
 *   1.如果某个员工来了，那么这个员工的所有直接下级都不能来.
 *   2.派对的整体快乐值是所有到场员工快乐值的累加
 *   3.你的目标是让派对的整体快乐值尽量大
 * 给定一棵多叉树的头节点boss，请返回派对的最大快乐值。
 */

// 员工的信息定义如下
interface EmployeeType {
  happy: number // 这位员工所能带来的快乐值
  nexts: Queue<EmployeeType> // 这名员工有哪些直接下级
}
// 员工的结构体
class Employee implements EmployeeType {
  happy: number;
  nexts: Queue<EmployeeType>;
}

// 这样可以得出以下结论
/**
 * 1，这是一个多叉树
 * 2，员工的下级不允许是上级
 * 3，最后的基层员工没有下级（树中的叶子节点）
 * 4，每个员工只有一上级（只有一个parent）
 * 5，每个员工都可以有0个到n个下级
 */
/**
 * 可能性：
 *  1）x来
 *    假设x来，那么其直接下级不来，其直接下级的所有下级则来或不来不确定
 *  2）x不来
 *    假设x不来，那么其所有下级则来或不来不确定
 * 根据以上可能性，我们需要向下级索要以下信息
 *  yes：该下级来的情况下的最大快乐值
 *  no：该下级不来的情况下的最大快乐值
 */
// 
interface InfoType {
  yes: number
  no: number
}

class Info implements InfoType {
  yes: number
  no: number;
  constructor(yes: number, no: number) {
    this.yes = yes
    this.no = no
  }
}

function partyHappyMax(x: EmployeeType) {
  return process(x)
}

function process(x: EmployeeType): Info {
  // 基层员工的可能性
  if (x.nexts.isEmpty()) {
    // 如果是基层员工，则happy是他自己，不来的情况则是0
    return new Info(x.happy, 0)
  }
  // x来的情况下，happy默认值先为x本身
  let yes = x.happy
  // x不来的情况下，happy默认为0
  let no = 0
  // 循环访问x的所有直接下级
  for (let index = 0; index < x.nexts.size(); index++) {
    // 获得当前下属的信息
    let nextInfo = process(x.nexts.front())
    // 在x来的情况下把下属不来的情况信息累加给x来的happy
    yes += nextInfo.no
    // 在x不来的情况下把下属来或不来的情况下求其happy最大值然后累加给x不来的happy
    no += Math.max(nextInfo.yes, nextInfo.no)
    // 弹出当前下属队列
    x.nexts.dequeue()
  }
  // 最后总结好所有下属的来或不来happy与结合自己的情况之后，返回给上级领导
  return new Info(yes, no)
}