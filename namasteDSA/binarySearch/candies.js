/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
 var maximumCandies = function(candies, k) {
    let l = 1; let r= Math.max(...candies); let ans=0

    function canDistribute(x){
        let count =0;
        for(let c of candies){
            count+=Math.floor(c/x)
        }
        return count>=k
    }
    while(l<=r){
        let mid = (l+r)>>1;
        if(canDistribute(mid)){
            ans= mid;
            l = mid+1
        }else{
            r= mid-1
        }
    }
    return ans
};