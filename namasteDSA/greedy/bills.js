/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let wallet = {}
    for(let i =0;i<bills.length;i++){
       wallet[bills[i]] = (wallet[bills[i]]||0)+1;
       if(bills[i]==10){
        wallet[5]  = wallet[5] -1

       }else if(bills[i]==20){
        if(wallet[10] ){
            wallet[5] =wallet[5]-1;
            wallet[10] =wallet[10]-1
        }else{
            wallet[5]=wallet[5]-3
        }
       }
       if(wallet[5]<0 || wallet[10]<0) return false
    
    }
return Object.values(wallet).every(val => val >= 0);

};