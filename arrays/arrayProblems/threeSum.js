function threeSum(arr){
    if(arr.length<3)return [];
    arr.sort((a,b)=>a-b);
    let result =[]
    for(let i =0;i<arr.length;i++){
        if(arr[i]>0) break;
        if(i>0 && arr[i]==arr[i-1]) continue;
      
        let L=i+1;
        let R= arr.length-1;
        while(L<R){
            let sum = arr[i] + arr[L] + arr[R];
            if(sum==0){
                result.push([arr[i] ,arr[L],arr[R]]);
                L++;
                R--;
                while (L < R && arr[L] === arr[L - 1]) L++;
                while (L < R && arr[R] === arr[R + 1]) R--;
            }else if(sum>0){
                R--
            }else{
                L++
            }
        }
    }
    return result;

}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))