var maxProfit = function (prices) {
    let maxProfit = 0;
    let L = 0;
    for (let R = 1; R < prices.length; R++) {
        if (prices[L] < prices[R]) {
            maxProfit = Math.max(maxProfit, prices[R] - prices[L])
        } else {
            L = R
        }
    }
    return maxProfit

};