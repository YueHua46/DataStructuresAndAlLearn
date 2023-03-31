import { Stack } from "./07_ADT_栈"
import { Queue } from './02_ADT_队列'
const infixStr = '5 + 2 * 3 - 4 * 7'

function infixToPostfix(infix: string) {
  // 中缀转后缀
  // 1.从中缀转后缀，我们需要先创建一个栈和一个队列
  const stack = new Stack()
  const queue = new Queue()
  const infixArr = infix.split(' ')

  // 2. 循环这个中缀
  infixArr.forEach((str, idx) => {
    // 操作符会入栈并有条件的出栈，操作数会第一时间入队
    // 操作符出栈并入队规则：
    // ①：得到了一个更低的优先级操作符（当前字符比栈顶字符优先级低）
    // ②：到达了表达式末尾
    if (idx === infixArr.length - 1) {
      console.log('满足条件2');
      // 满足条件②：到达表达式末尾
      clearStackToQueue(str, stack, queue, true)
      return queue
    }
    // 3.将判断中缀是操作数还是操作符
    if (isNormalPriority(str)) {
      console.log(idx, ': str是+或-');
      if (isStackHighestPriority(stack)) {
        console.log('满足条件1');
        // 满足条件①：得到了一个更低的优先级操作符，将当前栈内所有元素依次出栈到队列
        clearStackToQueue(str, stack, queue, false)
      } else {
        // 没有满足得到更低优先级，继续入栈
        stack.push(str)
        console.log('没有满足条件，直接入栈');
        stack.toString()
      }
    } else if (isHighestPriority(str)) {
      console.log(idx, ': str是*或/');
      // 当前操作符是最高优先级（没有括号情况下），所以直接入栈
      stack.push(str)
      stack.toString()
    } else {
      // console.log(idx, ': str是操作数，直接入队');
      // 该字符是操作数，直接入队
      queue.enqueue(str)
      queue.toString()
    }
  })

  return queue
}

// 判断当前表达式是否为操作符 + 或 -
function isNormalPriority(str: string): boolean {
  return str === '+' || str === '-' ? true : false
}
// 判断当前表达式是否为操作符 * 或 /
function isHighestPriority(str: string): boolean {
  return str === '*' || str === '/' ? true : false
}
// 判断当前栈顶是否为最高优先级操作符
function isStackHighestPriority(stack: Stack): boolean {
  return stack.peek() === '*' || stack.peek() === '/' ? true : false
}
// 满足操作符出栈并入队条件，执行出栈入队
function clearStackToQueue(str: string, stack: Stack, queue: Queue<any>, isEnd: boolean) {
  console.log('满足操作符出栈并入队条件，执行出栈入队');
  // 出栈并入队所有栈内元素
  if (isEnd) {
    // 如果是末尾元素，则一定是操作数，所以直接入队然后把所有栈内操作符入队
    queue.enqueue(str)
    while (stack.size()) {
      queue.enqueue(stack.pop())
    }
  } else {
    // 如果不是末尾元素，则直接将栈内所有操作符入队，再将当前操作符入栈
    while (stack.size()) {
      queue.enqueue(stack.pop())
    }
    stack.push(str)
  }


  // 最后将当前操作符入栈，通过传入表达式是否为末尾的布尔值来执行不同操作
  // 因为表达式末尾可直接入队
  isEnd ? queue.toString() : stack.toString()
}

const queue = infixToPostfix(infixStr)
queue.toString()