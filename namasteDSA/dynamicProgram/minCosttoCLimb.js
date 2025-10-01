var minCostClimbingStairs = function(cost) {
    if(cost.length==0) return 0;
    let n = cost.length
    let dp = [0,0];
    for(let i =2;i<=n;i++){
      dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }
    return dp[n]
  };