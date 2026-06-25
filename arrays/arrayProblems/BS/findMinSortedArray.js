function findMin(nums){
    let l =0;
    let r = nums.length-1;
    while(l<r){
        let m = Math.floor(l+(r-l)/2);
        if(nums[m]<nums[r]){
            r=m;
        }else{
            l=m+1;
        }
    }
    return nums[l];
}

console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([0,1,2,4,5,6,7]))
