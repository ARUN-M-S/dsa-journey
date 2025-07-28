var preorderTraversal = function (root) {
    let ans = []
    function traversal(curr) {
        if (!curr) return
        ans.push(curr.val);
        traversal(curr?.left)
        traversal(curr?.right)


    }
    traversal(root);
    return ans

};