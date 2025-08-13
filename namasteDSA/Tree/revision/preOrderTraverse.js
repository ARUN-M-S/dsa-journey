var preorderTraversal = function(root) {
    if(!root) return [];
    let ans =[];
    function travers(curr){
        if(!curr) return;
        ans.push(curr.val);
        curr.left && travers(curr.left)
        curr.right && travers(curr.right)

    };
    travers(root)
    return ans;
    
};