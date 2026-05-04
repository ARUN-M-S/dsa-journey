var sortColors = function (nums) {
    if (nums.length <= 1) return nums;
    let L = 0;
    let M = 0;
    let R = nums.length - 1;

    while (M <= R) {
        if (nums[M] == 0) {
            [nums[L],nums[M]]=[nums[M],nums[L]];
            L++;
            M++;
        }
        else if (nums[M] == 2) {
            [nums[M], nums[R]] = [nums[R], nums[M]];
            R--;
        } else M++
    }
    return nums
};