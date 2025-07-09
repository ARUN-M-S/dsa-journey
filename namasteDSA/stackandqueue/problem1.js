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