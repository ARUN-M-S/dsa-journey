var twoSum = function(nums, target) {
    let obj = {};
    for(let i =0;i<nums.length;i++){
        if(obj[nums[i]]!=undefined){
            return [i,obj[nums[i]]]
        }else{
            obj[target -nums[i]]=i
        }
    }
    return []
    
};