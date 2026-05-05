function fourSum(nums,target){
    if(nums.length<3) return [];
    let result = [];
    let L =0;
    let n = nums.length
    let R = n-1;
    nums.sort((a,b)=>a-b)
    for(let i =0;i<n-3;i++){
        if(i>0 && nums[i]==nums[i-1]) continue;
    
        
        for(let j =i+1;j<n-2;j++){
            if(j>i+1 && nums[j]==nums[j-1]) continue;
            L = j+1;
            R= n-1;
            while(L<R){
                let sum = nums[i]+nums[j]+nums[L]+nums[R];
                if(sum==target){
                    result.push([nums[i],nums[j],nums[L],nums[R]]);
                    L++;
                    R--;
                    while(L<R && nums[L]==nums[L-1])L++;
                    while(L<R && nums[R]==nums[R+1])R--;
                }else if(sum>target) R--;
                else L++
            }
        }
    }
    return result;
}

console.log(fourSum([1,0,-1,0,-2,2],0))