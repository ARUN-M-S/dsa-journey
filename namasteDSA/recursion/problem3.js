function recursionInplace(arr,start=0,end=arr.length-1){
    if(start>=end) return arr;
    [arr[start],arr[end]]=[arr[end],arr[start]];

    return recursionInplace(arr,start+1,end-1)
}
let arr = [1,2,3,4,5]
console.log(recursionInplace(arr))
console.log(arr)