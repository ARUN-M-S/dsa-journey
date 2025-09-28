var lemonadeChange = function(bills) {
    let wallet = [0,0]
    for(let i =0;i<bills.length;i++){
        if(bills[i]==5){
            wallet[0]++
        }else if(bills[i]==10){
            wallet[0]--
            wallet[1]++
        }else{
            if(wallet[1]>0){
                 wallet[0]--
            wallet[1]--
            }else{
                wallet[0]-3
            }
        }
        if(wallet[0]<0) return false
    }

    return true;
    
};