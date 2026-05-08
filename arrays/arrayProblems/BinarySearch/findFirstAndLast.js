function findFirstAndLast(arr,t){
    let L =0;
    let R = arr.length-1;
    let result=[-1,-1];

    while(L<=R){
        let M = L +Math.floor((R-L)/2);
        if(arr[M]==t){
            result[0]=M;
            R=M-1
        }else if(arr[M]>t) R=M-1;
        else L=M+1
    }
     L =0;
     R = arr.length-1;
    while(L<=R){
        let M = L +Math.floor((R-L)/2);
        if(arr[M]==t){
            result[1]=M;
            L=M+1
        }else if(arr[M]>t) R=M-1;
        else L=M+1
    }
    
   return result

   
}

console.log(findFirstAndLast([5,7,7,8,8,10],8))