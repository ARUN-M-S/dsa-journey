var maxProfit = function(prices) {
    
    
    let l=0;
    let maxProfit= 0;
    for(let i =0;i<prices.length;i++){
        maxProfit = Math.max(maxProfit, prices[i]-prices[l]);
        if(prices[i]<prices[l]) l=i;

    }
    return maxProfit
};