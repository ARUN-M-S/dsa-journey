var firstMissingPositive = function(nums) {
    let n = nums.length
    for(let i =0;i<nums.length;i++){
         while (
        nums[i] > 0 &&
        nums[i] <= n &&
        nums[i] !== nums[nums[i] - 1]
    ) {
        let temp = nums[nums[i] - 1];
        nums[nums[i] - 1] = nums[i];
        nums[i] = temp;
    }
    }
    for(let i =0;i<nums.length;i++){
        if(i+1!=nums[i]) return i+1
    }
    return n+1

};