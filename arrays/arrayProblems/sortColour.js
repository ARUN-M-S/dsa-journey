function sort(arr){
    if(arr.length<1)return arr;
    let L =0;
    let H= arr.length-1;
    let M=0;

    while(M<=H){
        if(arr[M]==0){
           
            [arr[L],arr[M]]=[arr[M],arr[L]];
            L++;
            M++;
        }else if (arr[M]==2){
            [arr[H],arr[M]]=[arr[M],arr[H]];
            H--;
        }else{
            M++
        }
    }
    return arr
}

console.log(sort([0,1,2,0,1,2]))