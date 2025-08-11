var searchBST = function (root, val) {
    let ans = null
    let traverse = (curr) => {
        if (!curr) return null
        if (curr.val == val) {
            ans = curr
        } else {
            if (val < curr.val) {
                traverse(curr.left)
            } else {
                traverse(curr.right)
            }
        }
    }
    traverse(root)

    return ans

};