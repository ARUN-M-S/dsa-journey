/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let combo = {
        '{':'}',
        '(': ')',
        '[':']'
    }
    let stack =[];
    for(let i =0;i<s.length;i++){
        if(combo[s[i]]){
            stack.push(combo[s[i]])
        }else if(stack.length==0 || stack.pop()!=s[i]){
            return false;
        }
    }
    return stack.length==0;
};