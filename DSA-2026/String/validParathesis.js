function validParanthesis(s){
    let pair= {
        '(':')',
        '[':']',
        '{':'}'
    }
    let stack =[]
    for(let i=0;i<s.length;i++ ){
        if(pair[s[i]]){
            stack.push(s[i])
        }else{
            if(pair[stack.pop()]!=s[i]) return false;
        }
    }
    console.log(stack)
    return stack.length ==0 ? true:false;
}

console.log(validParanthesis('()'))
console.log(validParanthesis('{[()]}'))
console.log(validParanthesis('{[(})]}'))