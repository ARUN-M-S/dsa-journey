var maxProfit = function(prices) {
    let ans =0;
    for(let i =1;i<prices.length;i++){
        let profit = prices[i]-prices[i-1]
        if(prices[i]>prices[i-1]){
            ans+=profit
        }

    }
    return ans
    
};