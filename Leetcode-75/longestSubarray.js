
var longestSubarray = function(nums) {
    let badCount=0;
    let maxLength=0;
    let left =0;

    for(let right=0;right<nums.length;right++){
        if(nums[right]!==1){
            badCount++;
        }

        while(badCount>1){
           if( nums[left]!==1){
            badCount--;
           }
           left++
        }
        maxLength = Math.max(maxLength,right-left)
    }
    return maxLength
};