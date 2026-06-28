var splitArray = function(nums, k) {
    let l = Math.max(...nums);
    let r= nums.reduce((a,b)=>a+b,0)
    while(l<=r){
        let m = Math.floor(l+(r-l)/2);
        if(helper(nums,k,m)){
            r=m-1;
        }else{
            l=m+1
        }
    }
    return l
    
};