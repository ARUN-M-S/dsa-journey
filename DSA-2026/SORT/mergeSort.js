function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left,right)

}


function merge(left,right){
    let l=0;
    let r=0;
    let result = [];

    while(l<left.length && r<right.length){
        if(left[l]<=right[r]){
            result.push(left[l++])
        }else{
            result.push(right[r++])
        }
    }

    return [...result,...left.slice(l),...right.slice(r)]
}

console.log(mergeSort([4,5,7,3,2,1]))