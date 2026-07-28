function merge(left,right){
    let l=0;
    let r=0;
    let result =[]
    while(l<left.length && r<right.length){
        if(left[l]<=right[r]){
            result.push(left[l++])
        }else{
            result.push(right[r++])
        }
    }

    return [...result,...left.slice(l),...right.slice(r)]
}

function mergeSort(arr){
    if(arr.length<=1) return arr
    let n = arr.length;
    let left = mergeSort(arr.slice(0,Math.floor(n/2)))
    let right = mergeSort(arr.slice(Math.floor(n/2)))

    
    return merge(left,right)
}