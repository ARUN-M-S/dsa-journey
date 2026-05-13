var findMin = function (arr) {
    let L = 0;
    let R = arr.length - 1;
    while (L < R) {
        let M = L + Math.floor((R - L) / 2);
        if (arr[L] < arr[M]) {
            if (arr[M] > arr[R]) {
                L = M + 1
            } else {
                R = M
            }
        } else {
            if (arr[M] < arr[R]) {
                R = M
            } else {
                L = M + 1
            }
        }

    }
    return arr[L]
};