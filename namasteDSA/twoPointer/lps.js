function findLps(val){
    let m = val.length;
    let arr=[0];
    let i =0;
    let j = 1;
    while(j<m){
        if(val[i]==val[j]){
            arr[j]=i+1;
            i++;
            j++
        }else{
            if(i==0){
                arr[j]=0;
                j++
            }else{
               
                i = arr[i-1];
            }
        }
    }
    return arr;

}

console.log(findLps('onions'))