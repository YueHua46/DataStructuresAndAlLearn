import { Stack } from "./07_ADT_栈"

const suffixStr = 'AB*CD*+E-'
// A=2,B=3,C=5,D=4,E=9
const suffixStr2 = '2,3,*,5,4,*,+,9,-'
const stack = new Stack()
console.log('stack', stack.toString());

// 后缀在栈中计算方法
function suffixMath(infix: string) {
  const infixArr = infix.split(',')
  // 循环中缀
  infixArr.forEach(op => {
    // 入栈
    stack.push(op)
    // 当前入栈为操作符，进行数学计算并入栈
    if (op == '+' || op == '-' || op == '*' || op == '/') {
      // 获取操作符，并出栈
      const operator = stack.pop()
      // 获取操作数，并出栈
      const op2 = stack.pop()
      const op1 = stack.pop()

      const process = `${op1}${operator}${op2}`
      const result = eval(process)
      console.log('result', result);
      console.log('stack', stack.toString());

      // 最终将计算后的操作数，再入栈
      stack.push(result)
    }
  })
  console.log('stack', stack.toString());
}

suffixMath(suffixStr2)