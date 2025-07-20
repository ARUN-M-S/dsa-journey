var singleNonDuplicate = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2)
        if (nums[m] != nums[m + 1] && nums[m] != nums[m - 1]) return nums[m]
        if (nums[m] == nums[m + 1]) {
            if ((r - m + 1) % 2 == 0) {
                r = m - 1
            } else {
                l = m + 1
            }

        } else if (nums[m] == nums[m - 1]) {
            if ((r - (m - 1)) % 2 == 0) {
                l = m + 1
            } else {
                r = m - 2
            }
        }
    }
    return -1

};