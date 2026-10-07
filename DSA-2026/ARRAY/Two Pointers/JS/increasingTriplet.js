var increasingTriplet = function (nums) {
    let i = nums[0];
    let j = Infinity;

    for (let k = 0; k < nums.length; k++) {
        if (nums[k] <= i) {
            i = nums[k]
        } else if (nums[k] <= j) {
            j = nums[k]
        } else {
            return true;
        }

    }
    return false

};