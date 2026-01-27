var removeDuplicates = function (nums) {
    let slow = 0;
    let fast = 1
    while (fast < nums.length) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
            fast++
        } else {
            fast++
        }
    }
    return slow + 1;
};