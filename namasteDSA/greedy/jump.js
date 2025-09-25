var jump = function(nums) {
    let jumps = 0;
    let currentEnd = 0;
    let maxReach = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        
        if (i === currentEnd) {   // we must make a jump
            jumps++;
            currentEnd = maxReach;
        }
    }

    return jumps;
};
