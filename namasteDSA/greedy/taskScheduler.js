var leastInterval = function(tasks, n) {
    
    let max = 0;
    let map ={};
    for(let i =0;i<tasks.length;i++){
        map[tasks[i]] = (map[tasks[i]]||0) +1;
        max= Math.max(max,map[tasks[i]] )
    }
    let maxFre=0;
   for (let task in map) {
        if (map[task] === max) maxFre++;
    }


     let cycle =((max-1)*(n+1))+maxFre
     return  Math.max(tasks.length,cycle)
    
};