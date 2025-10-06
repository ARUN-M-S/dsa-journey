var coinChange = function(coins, amount) {
    let n = coins.length;
    let obj ={}
    
        let fn =(remAmount)=>{
            if(remAmount in obj)return obj[remAmount]
            if(remAmount==0)return 0;
            if(remAmount<0)return -1
            let min = Infinity;
            
            for(let i =0;i<n;i++){
                let res = fn(remAmount-coins[i]);
                if(res!=-1){
                 min= Math.min(min,1+res)
                }
    
            }
            obj[remAmount] = min == Infinity ? -1 :min
            return min ==Infinity ? -1 :min
    
        }
        return fn(amount)
        
    };