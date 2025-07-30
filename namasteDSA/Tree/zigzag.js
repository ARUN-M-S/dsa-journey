var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];
  let count = 0;
  while (q.length) {
    const lvlArr = [];
    const lvlSize = q.length;
    for (let i = 0; i < lvlSize; i++) {
      let curr = q.shift();

      if (count % 2 == 0) {
        lvlArr.push(curr.val);
      } else {
        lvlArr.unshift(curr.val);
      }
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    count++;

    ans.push(lvlArr);
  }
  return ans;
};
