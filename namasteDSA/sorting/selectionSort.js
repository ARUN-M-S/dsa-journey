function selectionSort(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let min = i;
        for(let j =i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }
        if(min!=i){
            swap(arr,i,min)
        }
    }
    return arr;
}

function swap(arr,i,j){
    return [arr[i],arr[j]]=[arr[j],arr[i]]
}

console.log(selectionSort([5,2,4,6,7,82,3,5,7,1,1,3,5,]))