var rotate = function (nums, k) {
    if (k == 0) return nums;
    k = k % nums.length;

    const reverse = (arr, left, right) => {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--
        }

    }
    reverse(nums, nums.length - k, nums.length - 1);
    reverse(nums, 0, nums.length - 1 - k);
    reverse(nums, 0, nums.length - 1);



    return nums
};