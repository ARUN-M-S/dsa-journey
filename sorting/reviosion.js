// BubbleSort

function swap(arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
    if (!Array.isArray(arr)) return 'Not a array';

    for (let i = arr.length; i > 0; i--) {
        let noSwap = true;
        for (j = 0; j < i-1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwap = false
            }
            
        }
        if (noSwap) break;
    }
    return arr;
}


function selctionSort(arr){
    if (!Array.isArray(arr)) return 'Not a array';
for(let i=0;i<arr.length;i++){
    let minimum = i;
    for(let j=i+1;j<arr.length;j++){
        if (arr[j] < arr[minimum]) {      // ✅ comparison here
            minimum = j;
        }

    }
    if(minimum!==i){
        swap(arr,minimum,i)
    }
}
return arr
}



function insertionSort(arr){
    if (!Array.isArray(arr)) return 'Not a array';
    for(let i=1;i<arr.length;i++){
        let current = arr[i];
        for(var j=i-1;j>=0 && arr[j] >current;j--){
            arr[j+1]=arr[j]

        }
        console.log(j ,current, arr[j+1] ,"After one iteration");
        arr[j+1]=current;

        console.log(arr,"afetr");
            
    }
    return arr

}

console.log(bubbleSort([3,5,2,1,7,89,99,33,4,22]));
console.log(selctionSort([3,5,2,1,7,89,99,33,4,22]));
console.log(insertionSort([2,5,6,4,9,8,1,6,3,27]));


