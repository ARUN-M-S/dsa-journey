/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function (root) {
    if (!root) return true;
    let ans = true;
    function level(curr) {
        if (!curr) return 0;

        let left = level(curr.left)
        let right = level(curr.right);

        if (Math.abs(left - right) > 1) {
            ans = ans && false
        }
        return 1 + Math.max(left, right)

    }

    level(root);
    return ans


};