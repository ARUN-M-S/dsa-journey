var maxProfit = function (prices) {
    let l = 0;
    let r = 0;
    let max = -Infinity;
    while (r < prices.length) {
        if (prices[r] < prices[l]) {
            l = r
        }

        max = Math.max(max, prices[r] - prices[l])
        r++
    }
    return max == -Infinity ? 0 :max ;

};