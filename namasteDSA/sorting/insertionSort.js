function insertionSort(arr){
    let n= arr.length;
    for(let i=1;i<n;i++){
        let current = arr[i];
        let prev = i-1;

        while(arr[prev]>current && prev>=0){
            arr[prev+1]=arr[prev];
            prev--
        }
        arr[prev+1] = current
    }
    return arr;
}
console.log(insertionSort([7,3,2,1,56,77,8,90]))