function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid ))
    return merge(left, right)

}

function merge(arr1, arr2) {
    let i = 0; j = 0;
    let result = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++
        } else {
            result.push(arr2[j]);
            j++
        }
    }
    while(i< arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j< arr2.length){
        result.push(arr2[j])
        j++
    }
    return result;
}

console.log(mergeSort([5,7,1,2,3,8,9,10,55,66]))