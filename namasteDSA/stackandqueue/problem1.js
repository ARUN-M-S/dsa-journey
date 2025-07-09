/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let stack =[];
    let ans="";
    for(let i =0;i<s.length;i++){
        let pop= false;
        if(s[i]=='('){
            stack.push(s[i])
        }else{
            stack.pop()
            pop=true;
        }

        let len = stack.length;
        if(pop&&len>=1 || len>1){
            ans+=s[i]
        }
    }
    return ans;
};


var removeOuterParentheses1 = function(s) {
    let stack =[];
    let ans="";
    for(let i =0;i<s.length;i++){
      
        if(s[i]=='('){
            if(stack.length>0)ans+=s[i]
            stack.push(s[i])
        }else{
            stack.pop()
            if(stack.length>0)ans+=s[i]
            
            
        }

      
    }
    return ans;
};