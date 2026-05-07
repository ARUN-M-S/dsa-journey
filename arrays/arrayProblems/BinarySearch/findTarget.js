function findTarget(arr,target){
    if(arr.length==0) return -1;
    let L =0;
    let R = arr.length-1;

    while(L<=R){
        let M = L + Math.floor((R-L)/2);
        if(arr[M]==target) return M;
        else if (arr[M]>target) R=M-1;
        else L=M+1
    }
    return -1
}

console.log(findTarget([-1, 0, 3, 5, 9, 12],2))