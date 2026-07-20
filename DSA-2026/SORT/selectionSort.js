function sort(arr){
    let n = arr.length
    for(let i =0;i<n;i++){
        let min=i
        for(let j =i;j<n;j++){
            if(arr[min]>arr[j]){
                min=j
            }

        }
        if(min!=i) swap(arr,min,i)
    }
    return arr
}

function swap(arr,a,b){
    return [arr[a],arr[b]]=[arr[b],arr[a]]
}

console.log(sort([2,5,7,1,3,8,9,3,4]))