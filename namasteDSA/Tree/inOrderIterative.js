var inorderTraversal = function (root) {
  let ans = [];
  let curr = root;
  let stack = [];
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }

  return ans;
};
