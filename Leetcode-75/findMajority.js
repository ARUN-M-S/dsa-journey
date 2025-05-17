function findMajority(arr) {
    let result =[];
    let freCouter = {};
    
    for(let nums of arr){
        freCouter[nums] = (freCouter[nums]||0)+1;
    }
    
    for(let key of Object.keys(freCouter)){
        if(freCouter[key] >Math.floor(arr.length/3)){
            result.push(Number(key))
        }
    }
    
    return result;
  
}