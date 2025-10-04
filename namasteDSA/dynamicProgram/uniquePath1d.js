var uniquePaths = function(m, n) {
    let dp = Array(n).fill(1);  // first row = 1
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j] + dp[j-1];
        }
    }
    return dp[n-1];
};
