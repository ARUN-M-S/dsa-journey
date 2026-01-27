
var moveZeroes = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let temp = nums[i]
            nums[i] = 0;
            nums[i - count] = temp

        } else {
            count++
        }
    }
    return nums

};