var searchRange = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let arr = [-1, -1]
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] == target) {
            arr[0] = m;
            r = m - 1;
        }
        else if (nums[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    l = 0;
    r = nums.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] == target) {
            arr[1] = m;
            l = m + 1;
        }
        if (nums[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return arr;

};