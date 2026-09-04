function closingBracket(str){
    let stack =[];
    let ans =''
for(let i =0;i<str.length;i++){
    if(str[i]=='('){
        stack.push(str[i])
        if(stack.length>1) ans+=str[i]
    }else {
        if(stack.length>1) ans+=str[i]
        stack.pop()
        
    }
    
}
return ans
}

console.log(closingBracket('()()((()))'))


console.log(closingBracket('(())'))