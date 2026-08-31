function closingBracket(str){
    let stack =[];
    let ans =''
for(let i =0;i<str.length;i++){
    if(str[i]=='('){
        stack.push(str[i])
    }else {
        if(stack.length>2){
            ans=ans+str[i]
        }
        stack.pop()
        
    }
    if(stack.length>1){
        ans=ans+str[i] 
    }
}
return ans
}

console.log(closingBracket('()()((()))'))