var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;  // Both on left side
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right; // Both on right side
        } else {
            return root; // Split point (one on left, one on right, or one equals root)
        }
    }
    return null;
};