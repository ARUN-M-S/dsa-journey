var evalRPN = function(arr) {
    let stack = []
    let obj ={
        '+':(a,b)=>a+b,
        '-':(a,b)=>a-b,
        '*':(a,b)=>a*b,
        '/':(a,b)=>Math.trunc(a/b)
    }
    for(let char of arr){
        if(isNaN(char)){
            let b = stack.pop();
            let a = stack.pop()
            stack.push(obj[char](a,b))
        }else{
            stack.push(Number(char))
        }
        
    }
    return stack.pop()

}

console.log(evalRPN(['4', '13', '5', '/', '+']))

