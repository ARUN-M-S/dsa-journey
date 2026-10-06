var maxProfit = function (prices) {
    let profit = 0;

    for (let j = 1; j < prices.length; j++) {
        if (prices[j] > prices[j - 1]) {
            profit += prices[j] - prices[j - 1];
        }
    }

    return profit;
};