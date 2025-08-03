var inorderTraversal = function (root) {
    if (!root) return []
    let ans = [];


    function travers(curr) {
        if (!curr) return
        curr.left && travers(curr.left)
        ans.push(curr.val)
        curr.right && travers(curr.right)

    }
    travers(root)
    return ans;


};