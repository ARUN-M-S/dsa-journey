var pivotIndex = function(nums) {
    let l = 0;
    let r= 0;
    let totalSum = nums.reduce((a,b)=>a+b,0)
    let sum =0;

    for(let i =0;i<nums.length;i++){
        if(totalSum-sum*2 == nums[i]) return i
        sum+=nums[i]
        
    }
    return -1
   
    
};