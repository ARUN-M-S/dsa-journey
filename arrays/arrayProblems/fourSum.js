function fourSum(arr,target){
    if(arr.length<4) return [];

    let L=0;
    let R = arr.length-1;
    arr.sort((a,b)=>a-b);

    let result =[]
    for(let i =0;i<arr.length-3;i++){
        
        if(i>0 && arr[i]==arr[i-1]) continue;
        
        for(let j =i+1;j<arr.length-2;j++){
            if(j>i+1 && arr[j]==arr[j-1]) continue;
            L=j+1;
            R=arr.length-1
            while(L<R){
                const sum = arr[i] + arr[j] + arr[L] + arr[R];
                if(sum==target){
                    result.push([arr[i],arr[j],arr[L],arr[R]]);
                    L++;
                    R--;
                    while (L < R && arr[L] === arr[L - 1]) L++;
                    while (L < R && arr[R] === arr[R + 1]) R--;
                }else if (sum>target) R--;
                else L++;

            }
        }
    }
    return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2],0))