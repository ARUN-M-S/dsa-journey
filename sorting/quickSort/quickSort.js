function swap(arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let startIndex = start;

    for (let i = startIndex + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            startIndex++;
            swap(arr, startIndex, i)
        }
    }
    swap(arr, startIndex, start);
    return startIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr;
}


console.log(quickSort([
    2, 5, 7, 8, 9,
    3, 4, 1, 10, 9
]));