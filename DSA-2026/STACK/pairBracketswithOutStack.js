function pair(str){
    let depth =0;
    let ans=''
    for(let char of str){
        if(char=='('){
            if(depth>0)ans+=char;
            depth++
        }else{    
            depth--
            if(depth>0)ans+=char;
        }
    }
    return ans
}

console.log(pair('()()((()))'))


console.log(pair('(())'))