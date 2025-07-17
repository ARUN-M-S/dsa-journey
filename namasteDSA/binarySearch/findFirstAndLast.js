var searchRange = function(nums, target) {
    let l = 0;
    let r= nums.length-1;
    let arr =[-1,-1]
    while(l<r){
        let m = l+Math.floor((r-l)/2);
        if(nums[m]<target){
            l=m+1
        }else{
            r=m
        }
    }
    if(nums[r]==target) arr[0] =r;
     l = r;
     r= nums.length-1;
    while(l<r){
        let m = l+Math.floor((r-l)/2);

        if(nums[m]>target){
            r=m
        }else{
            l=m+1
        }
    }
    if(nums[r]==target) arr[1] =r;
    return arr;
    
};