var minSubArrayLen = function(target, nums) {
    let total =0,L=0;
    let min = Infinity;
    for(let R=0;R<nums.length;R++){
           total +=nums[R];
        while(total>=target){
            console.log(total)
            total-=nums[L];
           
            min = Math.max(0,Math.min(min,R-L+1))
             L++
        }
     
        // if(total>=target){

        // }
        
        
    }
    return min ==Infinity ? 0 :min;
    
};