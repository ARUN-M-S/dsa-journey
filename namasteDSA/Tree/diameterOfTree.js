var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    let maxLength = 0;

    let level = (curr)=>{

        if(!curr) return 0;
        let left = level(curr.left)
        let right = level(curr.right)
        let sum = left +right;
        maxLength = Math.max(maxLength,sum);
        return 1+Math.max(left,right)

    }
    level(root);
    return maxLength
    
};