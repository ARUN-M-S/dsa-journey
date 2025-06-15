function sum (arr,index=0){
    if(index==arr.length-1)return arr[index];
    return arr[index]+sum(arr,index+1)
}

console.log(sum([1,2,3,4,5]))