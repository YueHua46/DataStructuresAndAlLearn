class InfixToPostfix {
  static precedence(operator: string): number {
    switch (operator) {
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      case '^':
        return 3;
      default:
        return 0;
    }
  }

  static infixToPostfix(expression: string): string {
    let result = '';
    let stack: string[] = [];
    for (let i = 0; i < expression.length; i++) {
      let c = expression.charAt(i);
      if (c.match(/^[a-zA-Z0-9]+$/)) {
        result += c;
      } else if (c === '(') {
        stack.push(c);
      } else if (c === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          result += stack.pop();
        }
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        }
      } else {
        while (stack.length > 0 && this.precedence(stack[stack.length - 1]) >= this.precedence(c)) {
          result += stack.pop();
        }
        stack.push(c);
      }
    }
    while (stack.length > 0) {
      result += stack.pop();
    }
    return result;
  }
}

console.log(InfixToPostfix.infixToPostfix('a+b*c-d/e'));
console.log(InfixToPostfix.infixToPostfix('((a+b)*c)-(d/e)'));
