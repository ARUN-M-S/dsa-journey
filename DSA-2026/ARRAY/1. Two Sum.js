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



var twoSum = function(nums, target) {
    let map  = new Map();
    for(let i =0;i<nums.length;i++){
        let compliment = target - nums[i]
        if(map.has(compliment)){
            return [i,map.get(compliment)]
        }else{
           map.set(nums[i],i)
        }
    }
    return []
    
};