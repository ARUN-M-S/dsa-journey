var longestOnes = function(nums, k) {
  
    let zeroCount =0;
    let left =0;
    let maxCount=0;

    for(let right=0;right<nums.length;right++){
        if(nums[right]==0){
            zeroCount++;
        }
        while(zeroCount>k){
            if(nums[left]==0){
                zeroCount --;
            }
            left++;
        }
        maxCount = Math.max(maxCount, right-left+1)
    }
    
return maxCount
    
    
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2));

