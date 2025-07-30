var inorderTraversal = function (root) {
  let ans = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr?.left);
    ans.push(curr?.val);
    traversal(curr?.right);
  }
  traversal(root);
  return ans;
};
