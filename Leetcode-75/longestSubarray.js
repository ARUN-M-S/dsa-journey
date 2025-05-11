
var longestSubarray = function(nums) {
    let badCount=0;
    let maxLength=0;
    let left =0;

    for(let right=0;right<nums.length;right++){
        if(nums[right]!==1){
            badCount++;
        }

        while(badCount>1){
           if( nums[left]!==1){
            badCount--;
           }
           left++
        }
        maxLength = Math.max(maxLength,right-left)
    }
    return maxLength
};

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.