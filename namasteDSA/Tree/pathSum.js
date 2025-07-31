var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let ans = false;
  function travers(curr, currSum) {
    let sum = currSum + curr.val;
    if (!curr.left && !curr.right) {
      if (sum == targetSum) {
        ans = ans || true;
      }
    }

    curr.left && travers(curr.left, sum);
    curr.right && travers(curr.right, sum);
  }
  travers(root, 0);
  return ans;
};
