function find(nums, t) {
  let l = 0;
  let r = nums.length - 1;
  let arr = [-1, -1];
  let min = Infinity;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);

    if (nums[m] == t) min = Math.min(min, m);
    if (nums[m] < t) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  arr[0] = l;
  r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    if (nums[m] == t) min = Math.max(min, m);
    if (nums[m] > t) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  arr[1] = r;

  return arr;
}

console.log(find([5, 7, 7, 8, 8, 10], 7));
