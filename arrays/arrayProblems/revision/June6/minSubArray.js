function min(arr, target) {
    let l = 0;
    let r = 0;
    let sum = 0;
    let min = Infinity;
    while (r < arr.length) {
        sum += arr[r]
        while (sum >= target) {
            min = Math.min(min, r - l + 1)
            sum -= arr[l];
            l++
        }

        
        r++
    }
    return min == Infinity ? 0 :min
}

// Input:
// target = 7
// nums = [2,3,1,2,4,3]

// Output:
// 2

console.log(min([2,3,1,2,4,3],7))
console.log(min([1,4,4],1))
console.log(min([1,1,1,1,1,1,1,1],11))
