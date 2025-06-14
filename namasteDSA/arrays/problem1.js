let arr = [1, 2, 3, 3, 3, 5, 6, 7, 8, 9, 9, 10]

function removeDuplicates(arr) {
    if (!Array.isArray(arr) || arr.length == 0) return -1;
    let left = 0;
    let right = 0;
    while (right < arr.length) {
        if (arr[right] > arr[left]) {
            left++;
            arr[left] = arr[right];
            right++;
        } else {
            right++;
        }
    }
    console.log(arr);
    return left+1;
}
console.log(removeDuplicates(arr))