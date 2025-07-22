var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            console.info(i, left, right, '=>', nums[i], nums[left], nums[right])
            let sum = nums[i] + nums[left] + nums[right];

            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                left++;
                right--
            }


            else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return result;
};

console.log(threeSum([1, 0, -1, 0, -2, 2]));