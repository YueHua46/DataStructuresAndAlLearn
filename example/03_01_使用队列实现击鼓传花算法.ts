// 使用队列来实现击鼓传花算法
/**
 * 规则：
 * n个朋友一起玩一个游戏，围成一圈开始数数，数到m数的人自动淘汰，然后由淘汰的人的下一位继续开始数。
 * 最后剩下的这个人将获胜。如何实现在传入一个m数后，算出其最终获胜的人？
 */

class QueueJigu {
  // 队列
  private items: any[]
  // 人数
  private nop: number = 0
  // 范围
  private scope: number = 0
  // 当前索引
  public index: number = 0
  constructor() {
    this.items = []
  }
  // 1.往队列尾部添加元素
  enqueue(...element: any[]) {
    this.items.push(...element)
  }
  // 2.移除队列当中第一的元素
  dequeue() {
    this.items.shift()
  }
  // 3.返回队列中第一个元素
  front() {
    return this.items[0]
  }
  // 4.判断是否有元素
  isEmpty() {
    return !!this.items.length
  }
  // 5.获取队列长度
  size() {
    console.log('queue-length:', this.items.length)
    return this.items.length
  }
  // 6.将队列中的内容，转换成字符串形式返回
  toString() {
    console.log('queue:', this.items.toString())
    return this.items.toString()
  }
  // 7.开始游戏，传入人数和淘汰数
  start(nop: number, scope: number) {
    this.scope = scope
    this.nop = nop
    // 依次推入栈
    this.items.length = nop
    // 开始从0开始数数，数到scope便清除该位置的index
    for (let i = 0; i < this.items.length; i++) {
      this.index += 1
      if (this.index === 5) {
        this.items.splice(i, 1)
        this.index = 0
      }
      if (this.items.length === 1) {
      }
    }
  }
  init() {}
}

const jigu = new QueueJigu()
// 开始游戏，5个人玩数到5淘汰
jigu.start(5, 5)
jigu.size()
jigu.toString()
jigu.size()
