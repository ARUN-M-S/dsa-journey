var countNodes = function (root) {

    if (!root) return 0;

    if (!root.left) return 1 + countNodes(root.right)
    if (!root.right) return 1 + countNodes(root.left)
    return 1 + countNodes(root.right) + countNodes(root.left)

};


var countNodes = function (root) {
    if (!root) return 0;

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    if (leftHeight === rightHeight) {
        // Left subtree is perfect
        return (1 << leftHeight) + countNodes(root.right);
    } else {
        // Right subtree is perfect but one level smaller
        return (1 << rightHeight) + countNodes(root.left);
    }
};

function getHeight(node) {
    let h = 0;
    while (node) {
        h++;
        node = node.left;
    }
    return h;
}
