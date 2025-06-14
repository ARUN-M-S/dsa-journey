let arr = [7, 1, 5, 3, 6, 4,9]
let arr1 = [7,6, 5, 3, 2,1]



function timeToSell(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return -1;

    let left = arr[0];
    let max = 0;

    for (let i = 1; i < arr.length; i++) {
        if (left > arr[i]) {
            left = arr[i];
        } else {
            let diff = arr[i] - left;
            if (diff > max) {
                max = diff
            }

        }
    }
    return max;
}

console.log(timeToSell(arr1))