let arr = [2,7,9,6,15,4,3]
function heapSort(arr){
    let  n = arr.length;

    for(let i =n-1;i>=0;i--){
      heapifyDown(arr,i,n)
    }
    for(let i =n-1;i>0;i--){
      [arr[i],arr[0]]  =  [arr[0],arr[i]] ;
      heapifyDown(arr,0,i)
    }
    return arr;

}

function heapifyDown(arr,i,n){
    let largest = i;
    let left = (2*i)+1;
    let right = (2*i)+2;
    if(left <n && arr[left]>arr[largest]){
        largest = left
    }
    if(right < n && arr[right]> arr[largest]){
        largest= right
    }

    if(i!==largest){
        [arr[largest],arr[i]] = [arr[i],arr[largest]]
        heapifyDown(arr,largest,n)

    }
}
heapSort(arr);
console.log(arr)