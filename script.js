function oneClearClick(){
    display=document.getElementById("screen").value.slice(0,-1);
    document.getElementById("screen").value=display;
}
function clearScreen(){
    document.getElementById("screen").value="";
}
function clicking(val){
    document.getElementById("screen").value+=val;
}
function equalClick(val){
    const resultField = document.getElementById('screen');
      try {
        resultField.value = calculate(resultField.value);
      } catch (error) {
        resultField.value = 'Error';
      }
}
function calculate(expression) {
    const operators = ['+', '-', '*', '/','%'];
    const tokens = expression.match(/(\d+|\+|\-|\*|\/)/g);

    if (!tokens) {
      throw new Error('Invalid expression');
    }

    const stack = [];
    let currentOperator = null;

    tokens.forEach(token => {
      if (operators.includes(token)) {
        currentOperator = token;
      } else {
        const operand = parseFloat(token);
        if (isNaN(operand)) {
          throw new Error('Invalid operand');
        }

        if (currentOperator) {
          switch (currentOperator) {
            case '+':
              stack.push(operand);
              break;
            case '-':
              stack.push(-operand);
              break;
            case '*':
              stack.push(stack.pop() * operand);
              break;
            case '/':
              if (operand === 0) {
                throw new Error('Division by zero');
              }
              stack.push(stack.pop() / operand);
              break;
          }
          currentOperator = null;
        } else {
          stack.push(operand);
        }
      }
    });
    return stack.reduce((acc, val) => acc + val, 0);
}




