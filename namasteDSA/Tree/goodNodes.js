var goodNodes = function (root) {
    if (!root) return 0
    let ans = 0

    let traverse = (curr, max) => {
        if (!curr) return 0
        if (curr.val >= max) {
            ans++
        }
        curr.left && traverse(curr.left, Math.max(max, curr.val));
        curr.right && traverse(curr.right, Math.max(max, curr.val))


    }
    traverse(root, -Infinity);
    return ans

};