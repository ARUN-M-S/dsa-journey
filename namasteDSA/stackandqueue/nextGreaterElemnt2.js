var nextGreaterElements = function(nums) {
    let temp = [...nums,...nums];
    let stack = []
    let ans= Array(temp.length).fill(-1)
    for(let i =temp.length-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<=temp[i] ){
            stack.pop()
        }
       stack.length>0 ? ans[i]=stack[stack.length-1] : '';
       stack.push(temp[i])
    }
 
    return ans.slice(0,nums.length);
};

var nextGreaterElements2 = function(nums) {

    let n = nums.length;
    let stack = []
    let ans= Array(n).fill(-1)
    for(let i =(2*n)-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<=nums[i%n] ){
            stack.pop()
        }
       stack.length>0 ? ans[i%n]=stack[stack.length-1] : '';
       stack.push(nums[i%n])
    }
 
    return ans;
};