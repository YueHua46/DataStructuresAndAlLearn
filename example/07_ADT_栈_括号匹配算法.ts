import { Stack } from "../07_ADT_栈";

const stack = new Stack()

// 1.如果遇到左括号、左大括号，则直接入栈。然后指针跳到下一位
// 2.如果遇到右括号、右大括号，则直接与栈顶进行匹配
//   成功则栈顶出栈，然后指针跳到下一位。

// 封装一个能够返回匹配是否正确或失败的func
function isMatch(matchStr:string): boolean{
  const strArr = matchStr.split('')
  // 加锁
  let isMatch:boolean = true
  // 循环遍历字符集合
  strArr.forEach((v,i)=>{
    if(!isMatch) return 
    // 判断是否为左或右括号或不是
    if(v == '(' || v == '{' || v == '['){
      // 当前指针的值是左括号，直接入栈
      stack.push(v)
    }else if (v == ')' || v == '}' || v == ']'){
      if(stack.isEmpty()){
        // 如果在当前指针是右括号的前提下，stack为空，则不匹配。
        isMatch = false
        return
      }
      // 当前指针的值是右括号，和栈顶进行匹配
      switch(stack.peek()){
        case '(':
          v === ')' ? stack.pop() : '' 
          break;
        case '[':
          v === ']' ? stack.pop() : '' 
          break
        case '{':
          v === '}' ? stack.pop() : '' 
        break
      }
    }else {
      return
    }
  })

  // 最后判断栈中是否为空，是则说明匹配成功。
  if(!stack.isEmpty() || isMatch as boolean === false){
    return false
  }else {
    return true
  }
}
const str = '3*2-(8+1)'
const matchVal = isMatch(str)
console.log('matchVal : ',matchVal);