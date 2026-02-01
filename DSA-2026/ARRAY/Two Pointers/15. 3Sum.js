var threeSum = function(nums) {

    let result =[]
    nums.sort((a, b) => a - b);
    for(let i =0;i<nums.length-2;i++){
        let L = i+1;
        let R = nums.length-1;
        if(i > 0 && nums[i] == nums[i-1]) continue;
        while(L<R){
            let sum = nums[i]+nums[L]+nums[R]
            if(sum ==0){
                result.push([nums[i],nums[L],nums[R]]);

                while(L<R&& nums[L]==nums[L+1])L++;
                while(L<R&& nums[R]==nums[R-1])R--
                L++;
                R--;
            }else if(sum>0){
                R--
            }else{
                L++
            }
        }
    }
    return result;
};