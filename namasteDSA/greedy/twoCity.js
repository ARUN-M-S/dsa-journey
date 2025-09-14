var twoCitySchedCost = function (costs) {
    let sum = 0;
    costs.sort((a, b) => ((b[1] - b[0]) - (a[1] - a[0])))
    for(let i =0;i<costs.length;i++){
       if(i>=costs.length/2){
        sum+=costs[i][1]
       }else{
        sum+=costs[i][0]
       }
    }
     return sum
};