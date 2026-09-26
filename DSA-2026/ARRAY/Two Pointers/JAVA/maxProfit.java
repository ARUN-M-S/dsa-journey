

public class maxProfit {
    public int maxProfits(int[] prices) {
        int max=0;
        int l=0;
        for(int i =0;i<prices.length;i++){
            max=Math.max(max,prices[i]-prices[l]);
            if(prices[i]<prices[l]) {
                l=i;
            }
        }
        return max;
        
    }
}