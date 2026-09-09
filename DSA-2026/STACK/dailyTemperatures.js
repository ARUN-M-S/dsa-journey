var dailyTemperatures = function(t) {
    let stack =[];
    let ans = Array(t.length).fill(0);
   
    for(let i =t.length-1;i>=0;i--){
      
       while(stack.length>0 && stack[stack.length-1].value<=t[i]){
          stack.pop()
       }
       if(stack.length>0){
           ans[i]=stack[stack.length-1].index-i
       }
       stack.push({value:t[i],index:i})
    }
    return ans
   
};