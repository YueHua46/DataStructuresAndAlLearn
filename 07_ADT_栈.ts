// 封装栈类（Stack）
// 栈特征：先进后出
/**
 * 栈常见有哪些操作？
 * 1.push(element)：添加一个新元素到栈顶位置（入栈）
 * 2.pop(element)：移除栈顶得元素，同时返回被移除得元素
 * 3.peek(element)：返回栈顶得元素，不对栈做任何修改
 * 4.isEmpty(element)：如果栈顶没有任何元素，就返回true，否则false
 * 5.size(element)：返回栈里得元素个数。这个方法和数组的length属性很类似
 * 6.toString(element)：将栈结构的内容以字符形式返回
 */
export class Stack {
  constructor(private items: any[] = []) { }
  // 入栈
  public push(item: any) {
    this.items.push(item);
  }
  // 出栈（并返回出栈的元素）
  public pop(): any {
    return this.items.pop();
  }
  // 返回栈顶元素
  public peek(): any {
    return this.items[this.items.length - 1];
  }
  // 栈顶是否没有任何元素
  public isEmpty(): boolean {
    return this.size() === 0;
  }
  // 获得栈的长度
  public size(): number {
    return this.items.length;
  }
  // 将栈结构的内容以字符形式返回
  public toString() {
    console.log('stack', this.items.join(","));
  }
}

// 栈得使用
// const stack = new Stack();
// stack.push(1); // 入栈
// stack.push(2); // 入栈
// stack.push(3); // 入栈
// console.log(`当前栈的结构：${stack.toString()}`);
// stack.pop(); // 出栈
// console.log(`当前栈的结构：${stack.toString()}`);
// console.log(`栈顶元素：${stack.peek()}`); // 栈顶
// console.log(`栈的长度：${stack.size()}`); // 栈长度
// console.log(`栈是否为空：${stack.isEmpty()}`); // 栈是否为空
