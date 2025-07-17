
 var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    if (nums[l] <= nums[r]) {
        return nums[l]
    }
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] < nums[m - 1]) {
            return nums[m]

        }
         if (nums[l] <= nums[r]) {
        return nums[l]
    }
        if (nums[l] > nums[m]) {

            r = m - 1
        }

        else {
            l = m + 1
        }
    }
    return nums[r]

};
