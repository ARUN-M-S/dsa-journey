// var maxSlidingWindow = function(nums, k) {
//     if (nums.length <= 1 || k === 1) return nums;

//     let result = [];

//     // Calculate max for first window
//     let max = nums[0];
//     for (let i = 1; i < k; i++) {
//         max = Math.max(max, nums[i]);
//     }
//     result.push(max);

//     let i = 0;
//     let j = k;

//     while (j < nums.length) {
//         if (nums[i] === max) {
//             // max is sliding out, recalculate new max
//             max = nums[i + 1];
//             for (let m = i + 1; m <= j; m++) {
//                 max = Math.max(max, nums[m]);
//             }
//         } else {
//             // check if new element is greater
//             max = Math.max(max, nums[j]);
//         }

//         result.push(max);
//         i++;
//         j++;
//     }

//     return result;
// };
var maxSlidingWindow = function(nums, k) {
    let result = [];
    let deque = []; // will store indices

    for (let i = 0; i < nums.length; i++) {
        // Remove elements out of the current window
        if (deque.length && deque[0] === i - k) {
            deque.shift();
        }

        // Remove elements smaller than current from the back
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Push current index
        deque.push(i);

        // Start recording max from index k - 1
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
