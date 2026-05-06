var moveZeroes = function(nums) {
    let slow = 0;
    let fast = 0;
    while(fast<nums.length){
        if(nums[fast]!=0){
            [nums[fast],nums[slow]]=[nums[slow],nums[fast]]
            slow++;
        }
        fast++
    }
    
};