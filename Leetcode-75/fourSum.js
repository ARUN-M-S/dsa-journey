var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let result = []
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 1 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > 1 && nums[j] == nums[j - 1]) continue;
            let left = j + 1;
            let right = nums.length - 1

            while (left < right) {
                let sum = nums[i] + nums[right] + nums[left] + nums[j]
                if (sum == target) {
                    result.push([nums[i], nums[left], nums[right], nums[j]]);

                    while (nums[right] == nums[right - 1]) right--;
                    while (nums[left] == nums[left + 1]) left++;
                    right--;
                    left++;

                } else if (sum > target) {
                    right--;
                } else {
                    left++
                }
            }/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let result = []
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i+1 && nums[j] == nums[j - 1]) continue;
            let left = j + 1;
            let right = nums.length - 1;


            while (left < right) {
                let sum = nums[left] + nums[right] + nums[i] + nums[j]

                if (sum == target) {
                    result.push([nums[left], nums[right], nums[i], nums[j]])
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    while (left < right && nums[left] == nums[left + 1]) left++;

                    right--;
                    left++;
                } else if (sum > target) {
                    right--
                } else {
                    left++
                }
            }
        }
    }
    return result;

};
        }
    }
    return result;

};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));