function merge(arr1, arr2) {
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    let i = 0; let j = 0;
    let result = []
    while (i < arr1Length && j < arr2Length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1Length) {
        result.push(arr1[i]);
        i++
    }

    while (j < arr2Length) {
        result.push(arr2[j])
        j++
    }

    return result;
}


function mergeSort(arr){
   if(arr.length<=1) return arr;
let mid = Math.floor(arr.length/2);
let left = mergeSort(arr.slice(0,mid));
let right= mergeSort(arr.slice(mid));
return merge(left,right)
}
console.log(mergeSort([1, 2, 5, 6,3,8,4,7]));
