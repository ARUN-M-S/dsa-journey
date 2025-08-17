var buildTree = function(inorder, postorder) {
    let preIndex = inorder.length-1;
    let helper = (sIdx,eIdx)=>{
        if( sIdx>eIdx) return null

        let root = new TreeNode(postorder[preIndex]);
      
         let leftIno = inorder.indexOf(postorder[preIndex]);
         preIndex--;
          root.right = helper(leftIno+1,eIdx);
         root.left = helper(sIdx,leftIno-1);
        
         return root;

    };
    return helper(0,inorder.length - 1)
    
};