var productExceptSelf = function (nums) {
    let n = nums.length;
    let result = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1]

    }
    let product = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * product;
        product *= nums[i]
    }
    return result;

};