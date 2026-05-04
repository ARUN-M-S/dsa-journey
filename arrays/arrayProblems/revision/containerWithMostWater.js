function containerWithMostWater(arr) {
    let L = 0;
    let R = arr.length - 1;

    let maxWater = 0;

    while (L < R) {
        maxWater = Math.max(maxWater, (R - L) * Math.min(arr[L], arr[R]));

        if (arr[L] < arr[R]) L++;
        else R--
    }
    return maxWater
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))