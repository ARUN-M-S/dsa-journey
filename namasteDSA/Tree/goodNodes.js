var goodNodes = function(root) {
    if(!root) return 0
    let ans = []

    let traverse = (curr,max)=>{
        if(!curr) return 0
        if(curr.val >=max){
            ans.push(curr.val)
        }
        

        traverse(curr.left,Math.max(max,curr.val));
        traverse(curr.right,Math.max(max,curr.val))




    }
    traverse(root,-Infinity);
    return ans.length;
    
};