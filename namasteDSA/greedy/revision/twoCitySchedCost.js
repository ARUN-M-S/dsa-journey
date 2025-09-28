var twoCitySchedCost = function(costs) {
    costs.sort((a,b)=>((b[1]-b[0])-(a[1]-a[0])));
    let ans = 0;
   for(let i = 0;i<costs.length;i++){
    if(i<costs.length/2){
       ans+=costs[i][0]
    }else{
       ans+=costs[i][1] 
    }
   }
   return ans
};