function threeSum(nums){
    if(nums.length<3) return [];
    let result=[];
    let L=0;
    let R= nums.length-1;
    nums.sort((a,b)=>a-b)
    for(let i =0;i<nums.length;i++){
        if(nums[i]>0) break;
        if(i>0 && nums[i]==nums[i-1]) continue;
        L= i+1;
        R=nums.length-1
        while(L<R){
            let sum = nums[i]+nums[L]+nums[R];
            if(sum==0){
                result.push([nums[i],nums[L],nums[R]]);
                L++;
                R--;
                while(L<R && nums[L]==nums[L-1])L++;
                while(L<R && nums[R]==nums[R+1])R--;
            }else if(sum>0)R--;
            else L++
        }
    }
    return result;
}

console.log(threeSum([-2, 0, 0, 2, 2]))


// Input: nums = [-1, 0, 1, 2, -1, -4]

// Output: [[-1, -1, 2], [-1, 0, 1]]