var moveZeroes = function(nums) {
    let current = 0;
    let count = 0;

    while (current < nums.length) {
        if (nums[current] !== 0) {
            if (count > 0) {
                let temp = nums[current];
                nums[current] = 0;
                nums[current - count] = temp;
            }
        } else {
            count++;
        }
        current++;
    }
};