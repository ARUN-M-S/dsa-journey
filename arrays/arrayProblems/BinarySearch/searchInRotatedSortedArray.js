function search(arr,target){
    let L =0;
    let R = arr.length-1;
    while(L<=R){
        let M = L + Math.floor((R-L)/2);
        if(arr[M]==target) return M;
        if(arr[L]<=arr[M]){
            if(arr[L]<=target && arr[M]>target){
                R=M+1;
    
    
            }else{
                L=M+1
    
            }
        }else{
            if(arr[M]<target && arr[R]>=target){
                L=M+1;
    
            }else{
                R=M-1
    
            }
        }
       
    }
    return -1;
}

console.log(search([6, 7, 0, 1, 2, 4, 5],0))