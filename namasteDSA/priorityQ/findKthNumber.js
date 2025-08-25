var findKthNumber = function(m, n, k) {
    let left =1; let right = m*n;

    while(left<=right){
        let mid = Math.floor((left+right)/2);

        let count = 0;
        for(let i =1;i<=m;i++){
            count += Math.min(n,Math.floor(mid/i))
        }
        if(count>=k){
            ans = mid;
            right=mid-1
        }else{
            left = mid+1

        }
    }
    return ans
    
};