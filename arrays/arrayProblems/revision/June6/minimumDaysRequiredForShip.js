function minDays(weights, d) {
    let left = Math.max(...weights);
    let r = weights.reduce((a, b) => a + b, 0);

    while (left < r) {
        let m = left + Math.floor((r - left) / 2)

        if (helper(weights, m, d)) {
            r = m
        } else {
            left = m + 1
        }
    }
    return left;
}

function helper(weights, m, d) {
    let sum = 0;
    let count = 1;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (sum > m) {
            sum = weights[i];
            count++
        }
    }


    return count <= d
}

console.log(minDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))