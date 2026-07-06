function minDays(weights, d) {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)

        if (helper(weights, mid, d)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left;
}

function helper(weights, mid, d) {
    let sum = 0;
    let count = 1;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (sum > mid) {
            sum = weights[i];
            count++
        }
    }


    return count <= d
}

console.log(minDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))