var dailyTemperatures = function(t) {
    let stack =[]
    let ans=Array(t.length).fill(0)
    for(let i=t.length-1;i>=0;i--){
     
        let n=stack.length-1
        while(n>=0 && t[stack[n]]<=t[i]){

            n--
            stack.pop()
        }
        n<0 ? ans[i]=0 :ans[i] = stack[n]-i
        stack.push(i)

    }
    return ans
    
};