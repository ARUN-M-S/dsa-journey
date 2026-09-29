var productExceptSelf = function(nums) {
    let n = nums.length;
    let sufix =Array(n).fill(1);
    let prefix =Array(n).fill(1);
    for(let i =1;i<n;i++){
        sufix[i] = sufix[i-1] * nums[i-1]
    }
    for(let i =n-2;i>=0;i--){
        prefix[i] = prefix[i+1] * nums[i+1]
    }
for(let i =0;i<n;i++){
        sufix[i] = sufix[i] * prefix[i]
    }
return sufix



};