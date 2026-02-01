
 var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let L =0;
    for(let R=0;R<nums.length;R++){
        if(nums[R]!==0){
            max= Math.max(max,R-L+1);
          
        }else{
              L=R+1
        }
    }
    return max;
    
};