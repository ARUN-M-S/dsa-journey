var postorderTraversal = function (root) {
    if(!root) return [];
    let ans =[]
    function traverse(curr){
        if(!curr) return;
         curr.left&& traverse(curr.left);
         curr.right&& traverse(curr.right);
         ans.push(curr.val)

    }
    traverse(root)
    return ans

};