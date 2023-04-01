import { Queue } from "./02_ADT_队列"
import { Stack } from "./07_ADT_栈"

// 中缀字符用空格来区分
const infixStr = '( ( 5 + 2 ) * 3 - 4 ) * 7'

/**
 * 
 * 1.如果是数字或字母，直接将其加入到 queue 中；
 * 2.如果是左括号，将其加入到 stack 中；
 * 3.如果是右括号，不断将 stack 中的操作符弹出加入到 queue 中，直到遇到左括号。
   注意，左括号并不会加入到 result 中；
 * 4.如果是操作符，不断将 stack 中优先级高于或等于该操作符的操作符弹出加入到 queue 中
   然后将该操作符加入到 stack 中。
 */

//  用于匹配是否为数字或字母的正则
const num_letter_reg = /^[a-zA-Z0-9]$/

// 中缀转后缀函数
function infixToPostfix(infix: string) {
  // 栈用于保存操作符
  const stack = new Stack()
  // 队列用来保存最终的后缀表达式
  const queue = new Queue()
  // 转换为中缀数组（方便遍历操作）
  const infixArr = infix.split(' ')

  infixArr.forEach((str, idx) => {

    // 最后一个字符，循环的将栈中操作符入队
    if (idx === infixArr.length - 1) {
      if (str === ')') {
        while (stack.peek() !== '(') {
          queue.enqueue(stack.pop())
        }
        stack.pop()
        return
      } else {
        queue.enqueue(str)
        while (stack.size()) {
          queue.enqueue(stack.pop())
        }
        return
      }
    }
    if (str.search(num_letter_reg) !== -1) {
      // 1.如果是数字或字母，直接将其加入到 queue 中；
      queue.enqueue(str)
    } else if (str === '(') {
      // 2.如果是左括号，将其加入到 stack 中；
      stack.push(str)
    } else if (str === ')') {
      // 3.如果是右括号，不断将 stack 中的操作符弹出加入到 queue 中，直到遇到左括号。
      while (stack.peek() !== '(') {
        queue.enqueue(stack.pop())
      }
      // 最后将左括号出栈
      stack.pop()
    } else {
      // 4.如果是操作符，不断将 stack 中优先级高于或等于该操作符的操作符弹出加入到 queue 中
      //  然后将该操作符加入到 stack 中。
      while (stack.peek() === '*' || stack.peek() === '/') {
        queue.enqueue(stack.pop())
      }
      stack.push(str)
    }
  })
  // 返回最终结果后缀表达式
  return queue
}

const queue = infixToPostfix(infixStr)
queue.toString()