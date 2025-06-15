function maxConcicutiveOnes(arr){
    let count =0;
    let maxCount=0;

    for(let nums of arr){
        if(nums==1){
            count++; 
          
                maxCount=math.max(maxCount,count)
         
        }else{
           
                count=0;
            
        }
    }
    return maxCount;
}
let arr=[1,2,1,1,0,0,1]

console.log(maxConcicutiveOnes(arr))