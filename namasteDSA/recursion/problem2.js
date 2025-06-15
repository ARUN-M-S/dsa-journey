function sum (arr,index=0){
    let isOdd= arr[index]%2 !==0;
    if(index==arr.length-1){
        if(isOdd) return arr[index];
        else return 0;  
    }

    return isOdd ? arr[index]+sum(arr,index+1) : 0+sum(arr,index+1)
}

console.log(sum([1,2,3,4,5]))