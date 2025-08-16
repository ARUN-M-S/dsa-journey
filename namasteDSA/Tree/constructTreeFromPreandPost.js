var constructFromPrePost = function(preorder, postorder) {
    if(preorder.length !==postorder.length) return false;
    let preIndex = 0;
    function constructTree(postStart,postEnd){
           if (preIndex >= preorder.length || postStart > postEnd) return null;

        let root = new TreeNode(preorder[preIndex]);
        preIndex++;
        if (postStart === postEnd || preIndex > preorder.length) return root;
        let leftPost = postorder.indexOf(preorder[preIndex])
        root.left = constructTree(postStart,leftPost)
        root.right = constructTree(leftPost+1,postEnd-1)

        return root

    }
   return  constructTree(preIndex,postorder.length-1)
    
};