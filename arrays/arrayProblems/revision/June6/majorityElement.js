var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;
    for(let num of nums){
        if(count==0){
            candidate = num
            count++
         } else if(candidate==num ) count++
        else count --

    }
    return candidate
    
};