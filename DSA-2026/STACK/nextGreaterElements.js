var nextGreaterElements = function(nums) {
    let arr = [...nums,...nums];
    let n = arr.length;
    let stack =[];
    let ans =Array(n).fill(-1)
    for(let i=n-1;i>=0;i--){
        while(stack.length){
            let top = stack.length-1
            if(stack[top]>arr[i]){
                ans[i]=stack[top]
                break;
            }else{
                stack.pop()
            }
        }
        stack.push(arr[i])
    }
    return ans.slice(0,n/2)
};