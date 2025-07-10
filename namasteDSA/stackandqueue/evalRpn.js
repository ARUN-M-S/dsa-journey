var evalRPN = function(tokens) {

    let stack = []
    for(let i =0;i<tokens.length;i++){
        let result ;
        let operator = tokens[i]
        if( operator =='/' || operator =='*' || operator=='+' || operator=='-'){
            

            let num1 = Number(stack.pop());
            let num2 = Number(stack.pop())
          switch(operator){
            case '+' :
            result = num2+num1;
            break;
            case '-':
            result = num2-num1
            break;
            case '*':
            result = num2*num1
            break;
            case '/':
            result = Math.trunc(num2/num1)
            break;
          }

         stack.push(result)
        }else{
            stack.push(tokens[i])
        }
    }
    
    return Number(stack.pop())
};