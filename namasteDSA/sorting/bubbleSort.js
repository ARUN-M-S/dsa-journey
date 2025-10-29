function bubbleSort(arr){
    let n = arr.length;
    for(let i =0;i<n;i++){
        let swapped = false;
        for(j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
                swapped = true;
            }
        }
        if(!swapped){
            break
        }
    }
    return arr


}

console.log(bubbleSort([4,7,88,9,1,2,84]))