var findWinners = function(matches) {
    let wonMap ={};
    let lostMap={}
    for(let num of matches){
    
       wonMap[num[0]] = (wonMap[num[0]] ||0) +1;
       lostMap[num[1]] = (lostMap[num[1]] ||0) +1
    }
    console.log(wonMap, lostMap);
    let ans = [[],[]]
    Object.keys(wonMap).map((item)=>{
        if(!lostMap[item]){
            if(ans[0]){
                ans[0].push(Number(item))
            }
        }
    })
    Object.keys(lostMap).map((item)=>{
         if (lostMap[item]==1){
            if(ans[1]){
                ans[1].push(Number(item))
            }
        }
    })
    return ans
};


var findWinners = function(matches) {
    let lostMap = {};

 for (let [winner, loser] of matches) {
     lostMap[winner] = lostMap[winner] || 0; // ensure winner is in map with 0 losses
     lostMap[loser] = (lostMap[loser] || 0) + 1;
 }
  let zeroLoss = [];
 let oneLoss = [];

 for (let player in lostMap) {
     if (lostMap[player] === 0) {
         zeroLoss.push(Number(player));
     } else if (lostMap[player] === 1) {
         oneLoss.push(Number(player));
     }
 }
 zeroLoss.sort((a, b) => a - b);
 oneLoss.sort((a, b) => a - b);

 return [zeroLoss, oneLoss];
};