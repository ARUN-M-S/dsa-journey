var zigzagLevelOrder = function (root) {
    if (!root) return []
    let q = [root];
    let ans = [];
    function traverse(curr, lvl) {
        if (!curr) return;
        if (ans.length == lvl) {
            ans[lvl] = []
        }
        if (lvl % 2 == 0) {
            ans[lvl].push(curr.val);
        } else {
            ans[lvl].unshift(curr.val);
        }

        traverse(curr.left, lvl + 1);
        traverse(curr.right, lvl + 1)



    }
    
    traverse(root, 0)
    return ans;


};