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


var dailyTemperatures = function(t) {
    let stack =[];
    let n = t.length
    let ans = Array(n).fill(0);
    
    stack.push(n-1)
   
    for(let i =n-1;i>=0;i--){
      
       while(stack.length){
           let top = stack[stack.length-1];
           if(t[i]>=t[top])stack.pop();
           else {
               ans[i]=top-i;
               break;
           }

          
       }
   
       stack.push(i)
    }
    return ans
   
};