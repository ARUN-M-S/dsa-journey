var permuteUnique = function(nums) {
    

    let result = [];
nums.sort((a, b) => a - b); 
    let backTrack = (path, used) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // skip already used numbers
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
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