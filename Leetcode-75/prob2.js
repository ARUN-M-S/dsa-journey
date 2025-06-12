let arr = [2, 4, 8, 9, 7, 10];

function secondLargest(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return -1;
    let largest = -Infinity;
    let secondLarge = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLarge = largest;
            largest = arr[i]
        } else if (arr[i] > secondLarge) {
            secondLarge = arr[i]
        }
    }
    return secondLarge;
}

console.log(secondLargest(arr));