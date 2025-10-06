var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = Array(amount+1).fill(Infinity)
      dp[0]=0;
      for(let rem =1;rem<=amount;rem++){
        for(let j=0;j<n;j++){
           
            if(rem-coins[j]>=0){
            dp[rem] = Math.min(dp[rem],1+dp[rem-coins[j]])
            }
            
        }
    
      }
     
      return dp[amount] ==Infinity ? -1 : dp[amount]
    };