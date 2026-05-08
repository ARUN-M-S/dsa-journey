function findFirstAndLast(arr,t){
    let L =0;
    let R = arr.length-1;
    let result=[]
    
        while(L<R){
            let mid = L +Math.floor((R-L)/2);
            if(arr[mid]==t){
                if(result.length>0){
                    if( result[0]<mid)result[0]=mid;
                    else result[1]=mid;
                    R=mid-1;
                    L=mid+1
                }else{
                    result[0]=mid;
                }
               
            }else if (arr[mid]>t) R=mid-1;
            else L=mid+1
    
        }
        return result
        
   

   
}

console.log(findFirstAndLast([5,7,7,8,8,10],8))