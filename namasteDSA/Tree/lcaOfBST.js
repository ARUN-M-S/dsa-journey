/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function (root, p, q) {
    if (!root) return;
    let lca = null;


    let travers = (curr) => {
        let count = 0;
        if (!curr) return 0;


        let leftCount = travers(curr.left)
        let rightCount = travers(curr.right)

        if (p.val == curr.val || q.val == curr.val) {
            count++;
        }

        count = count + leftCount + rightCount;
        if (count == 2 && !lca) {
            lca = curr
        }

        return count;



    }
    travers(root)
    return lca

};