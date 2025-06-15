function recursionInplace(arr,start=0,end=arr.length-1){
    if(start>=end) return;
    [arr[start],arr[end]]=[arr[end],arr[start]];

    recursionInplace(arr,start+1,end-1)
}
let arr = [1,2,3,4,5]
recursionInplace(arr)

console.log(arr)