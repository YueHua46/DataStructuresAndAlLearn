import { QueueElementType } from "./03_ADT_优先级队列";

/**
 * Queue（先进先出）
 *  1.只允许在表前端(front)进行删除操作
 *  2.只允许在表后端(rear)进行插入操作
 * Queue队列应该拥有的功能
 *  1.enqueue 进队
 *  2.dequeue 出队
 *  3.fronte 获取到第一个元素，也是即将出队的元素
 *  4.isEmpty 判断队列是否为空
 *  5.size 返回队列的长度
 *  5.toString 返回队列的String表示
 */
type ElementType = string | number;

export class Queue<T extends ElementType | QueueElementType> {
  protected elements: Array<T>;
  constructor(...args: Array<T>) {
    this.elements = args;
  }
  //   入队
  enqueue(element: T, priority?: any) {
    this.elements.push(element);
  }
  //   出队
  dequeue() {
    this.elements.splice(0, 1);
  }
  //   返回第一个
  front() {
    return this.elements[0];
  }
  //   返回是否为空
  isEmpty() {
    return !this.elements.length;
  }
  //   返回队列长度
  size() {
    return this.elements.length;
  }
  //   返回队列的字符串表示
  toString(): void {
    console.log("queue:", this.elements.toString());
  }
}

// const queue = new Queue<string>("jack", "Larry");
/**

queue.enqueue("Mark");
queue.enqueue("Andy");
queue.enqueue("Sears");

console.log("是否为空：", queue.isEmpty());
console.log("队列长度：", queue.size());
console.log("队列中第一个：", queue.front());
console.log("字符串表示：", queue.toString());

queue.dequeue();
queue.dequeue();

console.log("是否为空：", queue.isEmpty());
console.log("队列长度：", queue.size());
console.log("返回队列中第一个：", queue.front());
console.log("字符串表示：", queue.toString());

 */
