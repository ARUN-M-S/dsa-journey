var maxSlidingWindow = function(nums, k) {
    if (nums.length <= 1 || k === 1) return nums;

    let result = [];

    // Calculate max for first window
    let max = nums[0];
    for (let i = 1; i < k; i++) {
        max = Math.max(max, nums[i]);
    }
    result.push(max);

    let i = 0;
    let j = k;

    while (j < nums.length) {
        if (nums[i] === max) {
            // max is sliding out, recalculate new max
            max = nums[i + 1];
            for (let m = i + 1; m <= j; m++) {
                max = Math.max(max, nums[m]);
            }
        } else {
            // check if new element is greater
            max = Math.max(max, nums[j]);
        }

        result.push(max);
        i++;
        j++;
    }

    return result;
};
