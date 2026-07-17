// function subArraySum(nums, k) {
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j]
//             if (sum == k) count++

//         }
//     }
//     return count

// }

function subArraySum(nums, k) {
  let prefixSum = 0;
  let count = 0;
  let map = {};
  map[0] = 1;

  for (let num of nums) {
    prefixSum += num;
    if (map[prefixSum - k] != undefined) {
      count += map[prefixSum - k];
    }
    map[prefixSum] = (map[prefixSum] || 0) + 1;
  }
  return count;
}
console.log(subArraySum([1, 2, 3], 3));
console.log(subArraySum([1, -1, 1, -1, 1], 1));
