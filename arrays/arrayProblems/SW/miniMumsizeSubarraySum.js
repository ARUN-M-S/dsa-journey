var minSubArrayLen = function (target, nums) {

    let min = Infinity;

    let l = 0;

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= target) {
            min = Math.min(min, i - l + 1)
            sum -= nums[l]
            l++
        }
    }

    return min == Infinity ? 0 : min
};