var zeroFilledSubarray = function(nums) {
    let count =0;
    let i =0;
    let j =-1;
    while(i<nums.length){
        if(nums[i]==0){
            count+=i-j
            
        }else{
            j=i;
        }
        i++
    }
    return count

};