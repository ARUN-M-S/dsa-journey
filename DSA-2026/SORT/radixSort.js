function radixSort(arr){
    let max = Math.max(...arr)
    for(let e=1;Math.floor(max/e) > 0;e=e*10){
        countingSort(arr,e)
    }
    return arr
}