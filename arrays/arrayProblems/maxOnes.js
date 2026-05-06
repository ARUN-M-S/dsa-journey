var findMaxConsecutiveOnes = function(nums) {
    let maxOnes=0;
    let L =0;
    let R=0;

    while(R<nums.length){
        if(nums[R]==1){
           maxOnes=Math.max(maxOnes,R-L+1) 
           
        }else{
          L=R+1
        }
        R++
    }
    return maxOnes

    
};