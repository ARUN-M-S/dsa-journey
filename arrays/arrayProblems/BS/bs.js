function find(arr, t) {
    if (arr.length == 0) return false;
    if (t > arr[arr.length - 1]) {
        arr[arr.length] = t;
        return arr;
    }
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);

        if (arr[m] == t) return m;
        if (arr[m] < t) {
            l = m + 1
        } else {
            r = m - 1
        }

    }
    for (let i = arr.length; i >= l; i--) {
        arr[i] = arr[i - 1];
    }
    arr[l] = t
    return arr;

}

let nums = [1, 3, 5, 6]
let target = 2;

console.log(find(nums, target))