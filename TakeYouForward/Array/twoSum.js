function twoSum(nums,target){
    let map ={};

    for(let i =0;i<nums.length;i++){
        let complement = target - nums[i];
        if(complement in map){
            return [i,map[target-nums[i]]]
        }
        map[nums[i]] = i
    }
    return []
}

console.log(twoSum([1, 6, 2, 10, 3],7))