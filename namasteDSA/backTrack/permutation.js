/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let result = [];

    let backTrack = (path, used) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // skip already used numbers
            path.push(nums[i]);
            used[i] = true;
            backTrack(path, used);
            path.pop();
            used[i] = false;
        }
    }

    backTrack([], Array(nums.length).fill(false));
    return result;
};
