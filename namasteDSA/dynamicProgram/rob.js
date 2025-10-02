var rob = function(val) {
    let n = val.length
        let dp=[];
        dp[0]=val[0];
        dp[1]= Math.max(dp[0],val[1]);
        for(let i =2;i<n;i++){
            dp[i]= Math.max(dp[i-2]+val[i],dp[i-1])
        }
        return dp[n-1]
        
    };