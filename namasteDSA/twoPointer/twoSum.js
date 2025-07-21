var twoSum = function(nums, target) {
    let obj ={}
    let n = nums.length-1;

    for(let i =0;i<=n;i++){
        let diff = target-nums[i]
        if(obj[nums[i]]>=0){
            return [obj[nums[i]],i]
        }
        obj[diff]=i
    }
    return [-1,-1]
    
};