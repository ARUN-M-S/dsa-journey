var findMaxAverage = function (nums, k) {
  if (nums.length <= 1) return nums[0];
  let sum = 0;
  let avg = -Infinity;
  let l = 0;
  let r = 0;
  while (r < nums.length) {
    sum += nums[r];
    if (r - l + 1 == k) {
      avg = Math.max(avg, sum / k);

      sum -= nums[l];
      l++;
    }
    r++;
  }
  return avg;
};
