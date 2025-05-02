function _fill(arr,value,startIndex,endIndex){
    if(!Array.isArray(arr)) return arr;

    startIndex = startIndex ?? 0;
    endIndex = endIndex ?? arr.length-1 ;
    for(let i =startIndex;i<=endIndex && i<arr.length;i++){
        arr[i]=value
    }
    return arr
}

console.log(_fill([1, 2, 3, 4], 'a', 1, 2));