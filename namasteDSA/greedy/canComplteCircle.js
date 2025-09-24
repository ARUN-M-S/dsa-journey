var canCompleteCircuit = function(gas, cost) {
    let curr =0;
    let total =0;
    let ans =0;
    for(let i =0;i<gas.length;i++){
        let gain = gas[i]- cost[i];
        curr= curr+gain;
        total = total+gain;
        if(curr<0){
            curr=0;
            ans=i+1
        }
    }
    return total <0? -1 :ans 
    
};