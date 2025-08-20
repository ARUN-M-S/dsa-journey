let arr = [2,7,9,6,15,4,3]
function heapSort(arr){
    let  n = arr.length;

    for(let i =n-1;i>=0;i--){
heapifyDown(arr,i)
    }

}

function heapifyDown(arr,i){
    let largest = i;
    let left = (2*i)+1;
    let right = (2*i)+2;
    if(arr[left]>arr[largest]){
        largest = left
    }
    if(arr[right]> arr[largest]){
        largest= right
    }

    if(i!==largest){
        [arr[largest],arr[i]] = [arr[i],arr[largest]]
        heapifyDown(arr,largest)

    }
}
heapSort(arr);
console.log(arr)