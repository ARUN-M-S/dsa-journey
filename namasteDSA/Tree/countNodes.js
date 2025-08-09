var countNodes = function(root) {

    if(!root) return 0;

    if(!root.left) return 1+ countNodes(root.right)
    if(!root.right) return 1+ countNodes(root.left)
    return 1+countNodes(root.right) +countNodes(root.left)
    
};