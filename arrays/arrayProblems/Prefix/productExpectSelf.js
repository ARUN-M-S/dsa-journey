var productExceptSelf = function (nums) {
    let left = Array(nums.length).fill(1);
    let right = Array(nums.length).fill(1);
    let result = Array(nums.length).fill(1);

    let product = 1;
    let n = nums.length

    for (let i = 0; i < n; i++) {
        if (i != 0) {
            left[i] = left[i - 1] * nums[i - 1];
            right[n - 1 - i] = right[n - i] * nums[n - i]

        } else {
            left[i] = 1;
            right[n - 1 - i] = 1
        }
    }

    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i]
    }
    return result;
};



var productExceptSelf = function (nums) {
    let n = nums.length
    let result = Array(n).fill(1);
   

    
    

    for (let i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];

    }
    let prod =1

    for (let i = n-1; i >=0; i--) {
        result[i]*=prod;
        prod*=nums[i]
    }
    return result;
};