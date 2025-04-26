function swap(arr,idx1,idx2){
   return [arr[idx1],arr[idx2]] =[arr[idx2],arr[idx1]]

}


function bubbleSort(arr) {
    if (!Array.isArray(arr)) return 'Not a array';

    for (let i = arr.length; i > 0; i--) {
        let swapped = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = false;
            }

        }
        if (swapped) break;
    }
    console.log(arr);
    return arr;
}

// console.log(bubbleSort([1,4,2,9,23,6,7,90,22,66,77]));

function bubbleSortOnlyEven(arr){
    if (!Array.isArray(arr)) return 'Not a array';

    for (let i = arr.length; i > 0; i--) {
        let swapped = true;
        for (let j = 0; j < i - 1; j++) {
            if ( arr[j]%2==0 && arr[j+1]%2==0 && arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = false;
            }

        }
        if (swapped) break;
    }
    return arr;
}

console.log(bubbleSortOnlyEven([1,2,4,5,6,88,99,23,43,44,54,22,35,66]));