var buildTree = function(preorder, inorder) {
    let preIndex = 0;
    let helper = (sIdx,eIdx)=>{
        if(preIndex >= preorder.length || sIdx>eIdx) return null

        let root = new TreeNode(preorder[preIndex]);
       if (sIdx === eIdx) {
            preIndex++;
            return root;
        }
         let leftIno = inorder.indexOf(preorder[preIndex]);
         preIndex++;
         root.left = helper(sIdx,leftIno-1);
         root.right = helper(leftIno+1,eIdx);
         return root;
    };
    return helper(0,preorder.length-1)
    
};