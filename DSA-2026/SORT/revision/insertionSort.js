function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        let curr=arr[i];
        let prev = i-1;
        while(curr<arr[prev] && prev>=0){
            arr[prev+1]= arr[prev];
            prev--
        }
    }
    return arr
}

console.log(insertionSort([4,3,6,8,1,2,3,9,2,5]))