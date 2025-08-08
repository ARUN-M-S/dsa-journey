var maxPathSum = function(root) {
    let max = -Infinity;
        let traverse = (curr,currSum)=>{
            if(!curr) return 0;
            let leftSum = Math.max(0,traverse(curr.left))
            let rightSum = Math.max(0,traverse(curr.right));
            let sum = leftSum+rightSum+curr.val;
            max = Math.max(sum,max);
            return curr.val +Math.max(leftSum,rightSum)
    
        }
        traverse(root,0);
        return max;
        
    };