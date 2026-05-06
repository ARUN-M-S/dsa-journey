var maxProfit = function(prices) {
    let maxProfit =0;
    let buy =Infinity;
    for(let i =0;i<prices.length;i++){
        if(prices[i]<buy){
            buy= prices[i]
        }else{
            maxProfit = Math.max(maxProfit, prices[i]-buy)
        }
    }
    return maxProfit
    
};