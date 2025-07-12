var dailyTemperatures = function(t) {
    let stack =[]
    let ans=Array(t.length).fill(0)
    for(let i=t.length-1;i>=0;i--){
        let count=0
        let n=stack.length-1
        while(n>=0 && stack[n]<=t[i]){
            count++;
            n--
        }
        n<0 ? ans[i]=0 :ans[i]=++count
        stack.push(t[i])

    }
    return ans
    
};