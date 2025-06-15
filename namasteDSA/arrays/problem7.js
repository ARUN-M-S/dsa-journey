function maxConcicutiveOnes(arr) {
    let count = 0;
    let maxCount = 0;

    for (let nums of arr) {
        if (nums == 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count)

            count = 0;
        }
    }
    return Math.max(maxCount,count);
}
let arr = [1, 2, 1, 1, 0, 0, 1,1,1]

console.log(maxConcicutiveOnes(arr))