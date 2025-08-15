var getMinimumDifference = function(root) {
    let curr = root;
    let stack =[];
    let min = Infinity;
    let prev= null;
    while(stack.length || curr){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        if(prev!=null){
            min = Math.min(min, curr.val - prev)
        }
          prev = curr.val;
        curr= curr.right;
       
    }
    return min
    
};