function sort(arr){
    let n = arr.length
    for(let i =0;i<n;i++){
        let swapped = false;
        for(let j =0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
                swapped=true
            }
        }
        if(!swapped) break
    }
    return arr
}

function swap(arr,i,j){
    return [arr[i],arr[j]]=[arr[j],arr[i]]
}

console.log(sort([2,5,6,1,3,8,9,2,3,5]))