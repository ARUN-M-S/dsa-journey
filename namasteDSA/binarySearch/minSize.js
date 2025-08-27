var minimumSize = function(nums, maxOperations) {
    let l = 1; let r = Math.max(...nums); let ans = r;
    function canSplit(mid){
        let ops = 0;
        for(let n of nums){
            ops += Math.ceil(n / mid) - 1; 
            if(ops > maxOperations) return false; // prune early
        }
        return ops <= maxOperations;
    }

    while(l<=r){
        let mid = (l+r)>>1;
        if(canSplit(mid)){
            r=mid-1;
            ans=mid
        }else{
            l= mid+1
        }
    }
    return ans
};