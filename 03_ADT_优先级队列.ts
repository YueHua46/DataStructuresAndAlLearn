import { Queue } from "./02_ADT_队列";

type ElementType = string | number;
type PriorityType = 1 | 2 | 3;
export interface QueueElementType {
  element: ElementType;
  priority: PriorityType;
}

// 构造优先级queue队列类
class PriorityQueue extends Queue<QueueElementType> {
  constructor() {
    super();
  }
  enqueue(queueElement: QueueElementType): void {
    // 为空，直接push
    if (this.isEmpty()) {
      this.elements.push(queueElement);
      return;
    }

    // 保存权限是否最大变量，用于后面直接push
    let isMax = true;
    this.elements.forEach((v, i) => {
      if (queueElement.priority < v.priority && isMax) {
        // 只要找到权限比他小的，就放到他前面
        this.elements.splice(i, 0, queueElement);
        // 并给是否最大变量设置为false
        isMax = false;
      }
    });
    // 权限是最大的，直接push到队尾
    if (isMax) this.elements.push(queueElement);
  }
  dequeue(): void {
    super.dequeue();
  }
  front(): QueueElementType | undefined {
    return this.elements[0];
  }
  isEmpty(): boolean {
    return super.isEmpty();
  }
  size(): number {
    return super.size();
  }
  toString(): void {
    this.elements.forEach((v) => {
      console.log(`element:${v.element} , priority:${v.priority}`);
    });
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue({ element: "jack", priority: 2 });
priorityQueue.enqueue({ element: "larry", priority: 2 });
priorityQueue.enqueue({ element: "mark", priority: 3 });
priorityQueue.enqueue({ element: "sears", priority: 3 });
priorityQueue.enqueue({ element: "Andy", priority: 1 });

// console.log("是否为空：", priorityQueue.isEmpty());
console.log("队列长度：", priorityQueue.size());
console.log("队列中第一个：", priorityQueue.front());
priorityQueue.dequeue(); // del first
priorityQueue.toString();
